import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Social Technologies Home"
      className={cn(
        "group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
        className
      )}
    >
      

      {showText && (
        <span className="flex flex-col leading-tight">
          <span className="text-base font-bold tracking-tight text-[#101828] transition-colors">
            Social<span className="text-[#2563EB]"> Technologies</span>
          </span>
          <span className="text-[10px] tracking-widest uppercase font-mono text-[#667085]">
            Build 2 gether
          </span>
        </span>
      )}
    </Link>
  );
}
