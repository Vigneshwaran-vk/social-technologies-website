# Social Technologies Website

Corporate website for [Social Technologies](https://socialtechnologies.in) — an Indian e-commerce ecosystem powering brands across discovery, marketplace selling, growth services, and partnerships.

## Ecosystem Pillars

1. **LGM Leader**: Local business discovery and lead generation ([lgm.socialtechnologies.in](https://lgm.socialtechnologies.in)).
2. **ICM Retails**: First-party seller presence across Amazon, Flipkart, Meesho, Myntra, and more.
3. **Marketplace Growth Services**: Full-funnel marketplace acceleration, advertising, and operational scale.
4. **Partner Program**: Collaborative ecosystem uniting sellers, manufacturers, and technology partners.

## Tech Stack

- **Framework**: Next.js (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Design Tokens (`src/styles/tokens.css`)
- **Typography**: Google Fonts self-hosted via `next/font` (Sora, Inter, JetBrains Mono)
- **Animation**: GSAP (ScrollTrigger & SplitText), Lenis Smooth Scroll, Motion
- **Code Quality**: ESLint + Prettier

## Project Structure

```
soc-tech/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router (layout, page, globals.css)
│   ├── components/
│   │   ├── motion/         # Motion components & smooth scroll wrappers
│   │   ├── sections/       # Page sections (Hero, Ecosystem, Pillars, etc.)
│   │   └── ui/             # Reusable UI primitives
│   ├── content/            # Copy, content models, visible placeholders
│   ├── lib/                # Utilities and animation helpers
│   └── styles/
│       └── tokens.css      # Core color, typography, and motion tokens
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js >= 18.18.0 (Node 20+ recommended)
- npm >= 9.0.0

### Installation

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Linting & Formatting

```bash
# Check lint errors
npm run lint

# Format code with Prettier
npm run format

# Verify formatting
npm run format:check
```

### Production Build

```bash
npm run build
npm run start
```
