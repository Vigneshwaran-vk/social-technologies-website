import fs from "fs";
import path from "path";

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  channels: string[];
  metric: string;
  metricLabel: string;
  date: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  content: string;
}

const CASE_STUDIES_DIR = path.join(process.cwd(), "src/content/case-studies");
const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function parseFrontmatter(rawContent: string): { data: Record<string, string | string[]>; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = rawContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: rawContent };
  }

  const yamlString = match[1];
  const bodyContent = match[2];
  const data: Record<string, string | string[]> = {};

  yamlString.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Clean string quotes
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      // Check array
      if (value.startsWith("[") && value.endsWith("]")) {
        data[key] = value
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim().replace(/^['"]|['"]$/g, ""));
      } else {
        data[key] = value;
      }
    }
  });

  return { data, content: bodyContent };
}

export function getCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [];

  const files = fs.readdirSync(CASE_STUDIES_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    const raw = fs.readFileSync(path.join(CASE_STUDIES_DIR, file), "utf-8");
    const { data, content } = parseFrontmatter(raw);

    return {
      slug,
      title: (data.title as string) || slug,
      description: (data.description as string) || "",
      client: (data.client as string) || "",
      industry: (data.industry as string) || "",
      channels: Array.isArray(data.channels) ? data.channels : [],
      metric: (data.metric as string) || "",
      metricLabel: (data.metricLabel as string) || "",
      date: (data.date as string) || "",
      content,
    };
  });
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const filePathMdx = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  const filePathMd = path.join(CASE_STUDIES_DIR, `${slug}.md`);

  const filePath = fs.existsSync(filePathMdx)
    ? filePathMdx
    : fs.existsSync(filePathMd)
      ? filePathMd
      : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = parseFrontmatter(raw);

  return {
    slug,
    title: (data.title as string) || slug,
    description: (data.description as string) || "",
    client: (data.client as string) || "",
    industry: (data.industry as string) || "",
    channels: Array.isArray(data.channels) ? data.channels : [],
    metric: (data.metric as string) || "",
    metricLabel: (data.metricLabel as string) || "",
    date: (data.date as string) || "",
    content,
  };
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = parseFrontmatter(raw);

    return {
      slug,
      title: (data.title as string) || slug,
      description: (data.description as string) || "",
      category: (data.category as string) || "Intelligence",
      author: (data.author as string) || "Social Technologies Research",
      authorRole: (data.authorRole as string) || "Marketplace Desk",
      date: (data.date as string) || "",
      readTime: (data.readTime as string) || "5 min read",
      content,
    };
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePathMdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const filePathMd = path.join(BLOG_DIR, `${slug}.md`);

  const filePath = fs.existsSync(filePathMdx)
    ? filePathMdx
    : fs.existsSync(filePathMd)
      ? filePathMd
      : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = parseFrontmatter(raw);

  return {
    slug,
    title: (data.title as string) || slug,
    description: (data.description as string) || "",
    category: (data.category as string) || "Intelligence",
    author: (data.author as string) || "Social Technologies Research",
    authorRole: (data.authorRole as string) || "Marketplace Desk",
    date: (data.date as string) || "",
    readTime: (data.readTime as string) || "5 min read",
    content,
  };
}
