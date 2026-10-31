"use client";

import { useState, useEffect, useRef } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

interface MarketplaceNode {
  id: string;
  name: "Flipkart" | "Amazon" | "Myntra" | "Meesho" | "Ajio" | "Zepto" | "Blinkit";
  logoFile: string;
  fillCircle?: boolean;
  side: "left" | "right";
  color: string;
  tooltip: string;
  desktop: { x: number; y: number; r: number };
  mobile: { x: number; y: number; r: number };
  desktopPath: string; // from marketplace to centre (500, 310)
  mobilePath: string; // from marketplace to centre (180, 75)
}

const MARKETPLACES: MarketplaceNode[] = [
  // Left side, top to bottom: Flipkart, Amazon, Myntra
  {
    id: "flipkart",
    name: "Flipkart",
    logoFile: "flipkart.png",
    side: "left",
    color: "#1D4ED8",
    tooltip: "Direct 1P storefront, Flipkart Assured badge, and Big Billion Days inventory dispatch.",
    desktop: { x: 100, y: 120, r: 55 },
    mobile: { x: 80, y: 220, r: 44 },
    desktopPath: "M 100 120 C 280 120, 360 310, 500 310",
    mobilePath: "M 80 220 L 180 75",
  },
  {
    id: "amazon",
    name: "Amazon",
    logoFile: "amazon.png",
    side: "left",
    color: "#C25E00",
    tooltip: "Prime-verified seller storefront, Buy Box optimization, and multi-region fulfillment.",
    desktop: { x: 75, y: 310, r: 55 },
    mobile: { x: 80, y: 360, r: 44 },
    desktopPath: "M 75 310 L 500 310",
    mobilePath: "M 80 360 L 180 75",
  },
  {
    id: "myntra",
    name: "Myntra",
    logoFile: "myntra.png",
    side: "left",
    color: "#BE123C",
    tooltip: "Curated fashion & lifestyle catalog feed with automated return governance.",
    desktop: { x: 100, y: 500, r: 55 },
    mobile: { x: 80, y: 500, r: 44 },
    desktopPath: "M 100 500 C 280 500, 360 310, 500 310",
    mobilePath: "M 80 500 L 180 75",
  },

  // Right side, top to bottom: Meesho, Ajio, Blinkit
  {
    id: "meesho",
    name: "Meesho",
    logoFile: "meesho-circle.png",
    fillCircle: true,
    side: "right",
    color: "#9D174D",
    tooltip: "Tier 2 & 3 Bharat consumer reach with high-velocity zero-commission fulfillment.",
    desktop: { x: 900, y: 120, r: 55 },
    mobile: { x: 280, y: 220, r: 44 },
    desktopPath: "M 900 120 C 720 120, 640 310, 500 310",
    mobilePath: "M 280 220 L 180 75",
  },
  {
    id: "ajio",
    name: "Ajio",
    logoFile: "ajio.png",
    side: "right",
    color: "#1D4ED8",
    tooltip: "Reliance Retail high-growth fashion & lifestyle digital catalog integration.",
    desktop: { x: 925, y: 310, r: 55 },
    mobile: { x: 280, y: 360, r: 44 },
    desktopPath: "M 925 310 L 500 310",
    mobilePath: "M 280 360 L 180 75",
  },
  {
    id: "blinkit",
    name: "Blinkit",
    logoFile: "blinkit-circle.png",
    fillCircle: true,
    side: "right",
    color: "#F59E0B",
    tooltip: "Direct dark store integration with rapid micro-fulfillment order dispatch.",
    desktop: { x: 900, y: 500, r: 55 },
    mobile: { x: 280, y: 500, r: 44 },
    desktopPath: "M 900 500 C 720 500, 640 310, 500 310",
    mobilePath: "M 280 500 L 180 75",
  },
];

interface InfraNode {
  id: "oms" | "inventory" | "shipping";
  name: "OMS" | "INVENTORY" | "SHIPPING";
  fullName: string;
  iconName: "Boxes" | "Warehouse" | "Truck";
  color: string;
  tooltip: string;
  desktop: { x: number; y: number; w: number; h: number; r: number };
  mobile: { x: number; y: number; w: number; h: number; r: number };
  desktopPath: string; // from centre to top of tile
  mobilePath: string; // from mobile centre to top of tile
}

const INFRA_NODES: InfraNode[] = [
  {
    id: "oms",
    name: "OMS",
    fullName: "Order Management System",
    iconName: "Boxes",
    color: "#8B5CF6", // purple
    tooltip: "Multi-channel unified order routing, returns governance, and real-time state synchronization.",
    desktop: { x: 310, y: 555, w: 96, h: 96, r: 24 },
    mobile: { x: 68, y: 650, w: 72, h: 72, r: 18 },
    desktopPath: "M 475 373 C 440 435, 310 435, 310 507",
    mobilePath: "M 172 125 L 172 575 C 172 595, 68 595, 68 614",
  },
  {
    id: "inventory",
    name: "INVENTORY",
    fullName: "Real-Time Inventory Balancing",
    iconName: "Warehouse",
    color: "#22A559", // green
    tooltip: "Pan-India multi-warehouse stock balancing, dark store replenishment, and zero-stockout buffers.",
    desktop: { x: 500, y: 555, w: 96, h: 96, r: 24 },
    mobile: { x: 180, y: 650, w: 72, h: 72, r: 18 },
    desktopPath: "M 500 378 L 500 507",
    mobilePath: "M 180 125 L 180 614",
  },
  {
    id: "shipping",
    name: "SHIPPING",
    fullName: "Automated Logistics & Dispatch",
    iconName: "Truck",
    color: "#F97316", // orange
    tooltip: "Intelligent carrier allocation, 10-minute dark store dispatch feeds, and end-to-end SLA tracking.",
    desktop: { x: 690, y: 555, w: 96, h: 96, r: 24 },
    mobile: { x: 292, y: 650, w: 72, h: 72, r: 18 },
    desktopPath: "M 525 373 C 560 435, 690 435, 690 507",
    mobilePath: "M 188 125 L 188 575 C 188 595, 292 595, 292 614",
  },
];

function InfraIcon({
  name,
  color,
  size = 40,
}: {
  name: "Boxes" | "Warehouse" | "Truck";
  color: string;
  size?: number;
}) {
  const half = size / 2;
  return (
    <svg
      x={-half}
      y={-half}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "Boxes" && (
        <>
          <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
          <path d="m7 16.5-4.74-2.85" />
          <path d="m7 16.5 5-3" />
          <path d="M7 16.5v5.17" />
          <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
          <path d="M12 13.5V8" />
          <path d="m12 8 4.74-2.85" />
          <path d="M12 8 7.26 5.15" />
          <path d="m17 16.5 4.74-2.85" />
          <path d="m17 16.5-5-3" />
          <path d="M17 16.5v5.17" />
        </>
      )}
      {name === "Warehouse" && (
        <>
          <path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" />
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" />
          <path d="M6 13h12" />
          <path d="M6 17h12" />
        </>
      )}
      {name === "Truck" && (
        <>
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </>
      )}
    </svg>
  );
}

export function EcosystemHub() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [hoveredTileId, setHoveredTileId] = useState<string | null>(null);
  const [isCenterHovered, setIsCenterHovered] = useState(false);
  const [linesDrawn, setLinesDrawn] = useState(false);
  const [loadedLogos, setLoadedLogos] = useState<Record<string, boolean>>({});

  // Check if logo files are present in public/logos/
  useEffect(() => {
    MARKETPLACES.forEach((node) => {
      const img = new window.Image();
      img.src = `/logos/${node.logoFile}`;
      img.onload = () => {
        setLoadedLogos((prev) => ({ ...prev, [node.id]: true }));
      };
      img.onerror = () => {
        setLoadedLogos((prev) => ({ ...prev, [node.id]: false }));
      };
    });
  }, []);

  // GSAP scroll trigger line draw and tile fade-in animation
  useEffect(() => {
    registerGsapPlugins();

    if (!sectionRef.current) return;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<SVGPathElement>(".hub-draw-line");
      lines.forEach((line) => {
        const length = line.getTotalLength ? line.getTotalLength() : 400;
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      // Initial state for infra dashed line clip and tiles
      gsap.set([".infra-clip-rect", ".infra-clip-rect-mob"], {
        attr: { height: 0 },
      });
      gsap.set(".infra-tile", {
        opacity: 0,
        y: 15,
      });

      // 1. Draw marketplace lines
      gsap.to(lines, {
        strokeDashoffset: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power2.out",
        onComplete: () => setLinesDrawn(true),
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // 2. Draw infra dashed lines down from centre
      gsap.to(".infra-clip-rect", {
        attr: { height: 320 },
        duration: 0.9,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.to(".infra-clip-rect-mob", {
        attr: { height: 560 },
        duration: 0.9,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // 3. Three tiles fade and rise in 0.1s after each other
      gsap.to(".infra-tile", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5F7FA] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 border-b border-[#E4E7EC]"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Accessible Alternative for Screen Readers */}
        <div className="sr-only">
          <h3>Interactive Commerce Ecosystem Map</h3>
          <p>
            Social Tech and ICM Retails operate at the core of India&apos;s unified commerce infrastructure, directly orchestrating six premier marketplace platforms and three foundational operational systems.
          </p>
          <h4>Connected Marketplaces</h4>
          <ul>
            <li>Flipkart: Direct 1P storefront, Flipkart Assured badge, and Big Billion Days inventory dispatch.</li>
            <li>Amazon: Prime-verified seller storefront, Buy Box optimization, and multi-region fulfillment.</li>
            <li>Myntra: Curated fashion &amp; lifestyle catalog feed with automated return governance.</li>
            <li>Meesho: Tier 2 &amp; 3 Bharat consumer reach with high-velocity zero-commission fulfillment.</li>
            <li>Ajio: Reliance Retail high-growth fashion &amp; lifestyle digital catalog integration.</li>
            <li>Blinkit: Direct dark store integration with rapid micro-fulfillment order dispatch.</li>
          </ul>
          <h4>Core Commerce Infrastructure</h4>
          <ul>
            <li>OMS (Order Management System): Stacked boxes icon, purple accent. Unified multi-channel order routing, automated state machine, and returns governance.</li>
            <li>INVENTORY: Warehouse icon, green accent. Real-time multi-channel inventory balancing, automated dark-store replenishment, and zero-stockout safety buffers.</li>
            <li>SHIPPING: Delivery truck icon, orange accent. Automated logistics allocation, direct dark store micro-fulfillment feeds, and SLA tracking across Pan-India delivery partners.</li>
          </ul>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828] leading-tight">
            An interconnected commerce engine
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
            How Social Tech connects directly with India&apos;s leading consumer marketplaces and quick-commerce networks through ICM Retails.
          </p>
        </div>

        {/* ====================================================
            DESKTOP INLINE SVG GRAPH (Hidden on mobile < md)
            ==================================================== */}
        <div className="mt-10 hidden md:block relative w-full overflow-hidden rounded-3xl border border-[#E4E7EC] bg-white p-3 sm:p-4 shadow-sm">
          <svg
            viewBox="0 0 1000 700"
            className="w-full h-auto select-none"
            aria-hidden="true"
          >
            {/* Background Grid Pattern within SVG */}
            <defs>
              <pattern id="hub-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#F2F4F7"
                  strokeWidth="1"
                />
              </pattern>
              <clipPath id="circle-clip-unit" clipPathUnits="objectBoundingBox">
                <circle cx="0.5" cy="0.5" r="0.5" />
              </clipPath>
              {/* Very soft modern shadow for tiles */}
              <filter id="tile-soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#101828" floodOpacity="0.05" />
                <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#101828" floodOpacity="0.03" />
              </filter>
              {/* Reveal clip path for infra lines drawing from centre downwards */}
              <clipPath id="infra-clip-desk">
                <rect className="infra-clip-rect" x="150" y="370" width="700" height="320" />
              </clipPath>
            </defs>
            <rect width="1000" height="700" fill="url(#hub-grid-pattern)" />

            {/* Connecting Lines Layer */}
            <g className="connections-layer">
              {/* 1. Marketplace Connecting Lines */}
              {MARKETPLACES.map((node, idx) => {
                const isHovered = hoveredNodeId === node.id;
                return (
                  <g key={`conn-${node.id}`}>
                    {/* Background Base Track */}
                    <path
                      d={node.desktopPath}
                      fill="none"
                      stroke={isHovered ? "#BFDBFE" : "#F2F4F7"}
                      strokeWidth={isHovered ? 4 : 2}
                      className="transition-colors duration-200"
                    />

                    {/* Animated Draw-in Path */}
                    <path
                      id={`desk-line-${node.id}`}
                      d={node.desktopPath}
                      fill="none"
                      stroke={isHovered ? "#2563EB" : "#D0D5DD"}
                      strokeWidth={isHovered ? 3.5 : 2}
                      className="hub-draw-line transition-all duration-300"
                    />

                    {/* Continuous Travelling Accent Pulse (Marketplace -> Centre) */}
                    {linesDrawn && !prefersReducedMotion && (
                      <circle
                        r={isHovered ? 4.5 : 3.5}
                        fill="#2563EB"
                        className="opacity-95"
                      >
                        <animateMotion
                          dur={`${3.2 + (idx % 3) * 0.4}s`}
                          repeatCount="indefinite"
                          begin={`${idx * 0.25}s`}
                        >
                          <mpath href={`#desk-line-${node.id}`} />
                        </animateMotion>
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* 2. Three Infrastructure Connecting Lines (Centre -> OMS, INVENTORY, SHIPPING) */}
              <g className="infra-connections-desk" clipPath="url(#infra-clip-desk)">
                {INFRA_NODES.map((node) => {
                  const isHovered = hoveredTileId === node.id;
                  return (
                    <g key={`infra-conn-${node.id}`}>
                      {/* Subtle background track */}
                      <path
                        d={node.desktopPath}
                        fill="none"
                        stroke="#F2F4F7"
                        strokeWidth={4}
                      />
                      {/* 2px wide dashed line, tile colour, 70% opacity, 100% on hover */}
                      <path
                        d={node.desktopPath}
                        fill="none"
                        stroke={node.color}
                        strokeWidth={isHovered ? 2.5 : 2}
                        strokeDasharray="6 6"
                        strokeLinecap="round"
                        className="transition-opacity duration-200"
                        style={{
                          opacity: isHovered ? 1 : 0.7,
                        }}
                      >
                        {!prefersReducedMotion && linesDrawn && (
                          <animate
                            attributeName="stroke-dashoffset"
                            from="0"
                            to="-12"
                            dur="2.5s"
                            repeatCount="indefinite"
                          />
                        )}
                      </path>
                    </g>
                  );
                })}
              </g>
            </g>

            {/* Interactive Nodes Layer */}
            <g className="nodes-layer">
              {/* Centre Node: Social Tech / ICM RETAILS */}
              <g
                transform={`translate(500, ${isCenterHovered ? 306 : 310})`}
                className="cursor-pointer"
                style={{
                  transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={() => setIsCenterHovered(true)}
                onMouseLeave={() => setIsCenterHovered(false)}
                role="group"
                aria-label="Social Tech ICM RETAILS Core Engine"
              >
                {/* Faint blue outer halo */}
                <circle r={82} fill="#2563EB" opacity="0.08" />
                <circle
                  r={75}
                  fill="none"
                  stroke="#93C5FD"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Main Centre Circle */}
                <circle
                  r={68}
                  fill="#FFFFFF"
                  stroke="#2563EB"
                  strokeWidth={2.5}
                  className="transition-all duration-200"
                />

                {/* Primary Title */}
                <text
                  textAnchor="middle"
                  dy="-4"
                  className="text-[16px] font-bold fill-[#101828] select-none pointer-events-none tracking-tight"
                >
                  Social Tech
                </text>

                {/* Blue caps subtitle */}
                <text
                  textAnchor="middle"
                  dy="16"
                  className="font-mono text-[10px] font-bold fill-[#2563EB] tracking-widest uppercase select-none pointer-events-none"
                >
                  ICM RETAILS
                </text>
              </g>

              {/* 6 Marketplace Nodes (Flipkart, Amazon, Myntra, Meesho, Ajio, Blinkit) */}
              {MARKETPLACES.map((node) => {
                const { x, y, r } = node.desktop;
                const isHovered = hoveredNodeId === node.id;
                const isLoaded = loadedLogos[node.id];

                return (
                  <g
                    key={node.id}
                    transform={`translate(${x}, ${isHovered ? y - 4 : y})`}
                    className="cursor-pointer"
                    style={{
                      transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    role="group"
                    aria-label={`Marketplace node: ${node.name}`}
                  >
                    {/* Circle Node (approx 110px circle on desktop, r=55) */}
                    <circle
                      r={r}
                      fill="#FFFFFF"
                      stroke={isHovered ? "#2563EB" : "#E4E7EC"}
                      strokeWidth={isHovered ? 2.5 : 1.5}
                      className="transition-all duration-200"
                    />

                    {/* Inside Circle: Logo if loaded, otherwise Text name if missing */}
                    {isLoaded ? (
                      node.fillCircle ? (
                        <image
                          href={`/logos/${node.logoFile}`}
                          x={-(r - 8)}
                          y={-(r - 8)}
                          width={(r - 8) * 2}
                          height={(r - 8) * 2}
                          preserveAspectRatio="xMidYMid slice"
                          clipPath="url(#circle-clip-unit)"
                          aria-label={`${node.name} logo`}
                        >
                          <title>{node.name} logo</title>
                        </image>
                      ) : (
                        <image
                          href={`/logos/${node.logoFile}`}
                          x={-36}
                          y={-22}
                          width={72}
                          height={44}
                          preserveAspectRatio="xMidYMid meet"
                          aria-label={`${node.name} logo`}
                        >
                          <title>{node.name} logo</title>
                        </image>
                      )
                    ) : (
                      <text
                        textAnchor="middle"
                        dy="5"
                        className="text-[15px] font-bold fill-[#101828] select-none pointer-events-none"
                      >
                        {node.name}
                      </text>
                    )}

                    {/* Under Circle: Label text 14px, dark grey */}
                    <text
                      textAnchor="middle"
                      y={r + 24}
                      className={cn(
                        "text-[14px] font-medium fill-[#344054] select-none pointer-events-none transition-colors duration-200",
                        isHovered && "fill-[#2563EB] font-semibold"
                      )}
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}

              {/* 3 Core Commerce Infrastructure Nodes (OMS, INVENTORY, SHIPPING) */}
              {INFRA_NODES.map((node) => {
                const { x, y, w, h, r } = node.desktop;
                const isHovered = hoveredTileId === node.id;

                return (
                  <g
                    key={node.id}
                    transform={`translate(${x}, ${isHovered ? y - 4 : y})`}
                    className="cursor-pointer"
                    style={{
                      transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={() => setHoveredTileId(node.id)}
                    onMouseLeave={() => setHoveredTileId(null)}
                    role="group"
                    aria-label={`Commerce infrastructure node: ${node.name} (${node.fullName})`}
                  >
                    <title>{`${node.name}: ${node.fullName} - ${node.tooltip}`}</title>

                    <g className="infra-tile">
                      {/* Rounded-square tile: 96px, 24px corner radius, 1px #E4E7EC border, soft shadow */}
                      <rect
                        x={-w / 2}
                        y={-h / 2}
                        width={w}
                        height={h}
                        rx={r}
                        ry={r}
                        fill="#FFFFFF"
                        stroke={isHovered ? node.color : "#E4E7EC"}
                        strokeWidth={isHovered ? 1.5 : 1}
                        filter="url(#tile-soft-shadow)"
                        className="transition-all duration-200"
                      />

                      {/* Centered Stroke Icon (40px) */}
                      <InfraIcon name={node.iconName} color={node.color} size={40} />

                      {/* Under tile: uppercase, letter-spaced, 14px, semi-bold, dark grey #344054 */}
                      <text
                        textAnchor="middle"
                        y={h / 2 + 24}
                        className={cn(
                          "text-[14px] font-semibold tracking-wider fill-[#344054] uppercase select-none pointer-events-none transition-colors duration-200",
                          isHovered && "fill-[#101828]"
                        )}
                      >
                        {node.name}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* ====================================================
            MOBILE 2-COLUMN SVG (Visible < md / under 768px)
            ==================================================== */}
        <div className="mt-8 block md:hidden relative w-full overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white p-2 shadow-xs">
          <svg
            viewBox="0 0 360 740"
            className="w-full h-auto select-none"
            aria-hidden="true"
          >
            {/* Background Grid Pattern for Mobile */}
            <defs>
              <pattern id="hub-grid-pattern-mob" width="30" height="30" patternUnits="userSpaceOnUse">
                <path
                  d="M 30 0 L 0 0 0 30"
                  fill="none"
                  stroke="#F2F4F7"
                  strokeWidth="1"
                />
              </pattern>
              <clipPath id="circle-clip-unit-mob" clipPathUnits="objectBoundingBox">
                <circle cx="0.5" cy="0.5" r="0.5" />
              </clipPath>
              {/* Mobile reveal clip for infra dashed lines */}
              <clipPath id="infra-clip-mob">
                <rect className="infra-clip-rect-mob" x="10" y="120" width="340" height="560" />
              </clipPath>
              {/* Soft modern shadow for mobile tiles */}
              <filter id="tile-soft-shadow-mob" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#101828" floodOpacity="0.06" />
                <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#101828" floodOpacity="0.04" />
              </filter>
            </defs>
            <rect width="360" height="740" fill="url(#hub-grid-pattern-mob)" />

            {/* Connecting Lines for Mobile */}
            <g className="mobile-connections">
              {/* 1. Marketplace Mobile Connecting Lines */}
              {MARKETPLACES.map((node, idx) => {
                const isHovered = hoveredNodeId === node.id;
                return (
                  <g key={`mob-conn-${node.id}`}>
                    <path
                      d={node.mobilePath}
                      fill="none"
                      stroke={isHovered ? "#BFDBFE" : "#F2F4F7"}
                      strokeWidth={3.5}
                    />
                    <path
                      id={`mob-line-${node.id}`}
                      d={node.mobilePath}
                      fill="none"
                      stroke={isHovered ? "#2563EB" : "#D0D5DD"}
                      strokeWidth={3}
                      className="hub-draw-line transition-all duration-300"
                    />
                    {linesDrawn && !prefersReducedMotion && (
                      <circle r="3.5" fill="#2563EB" className="opacity-95">
                        <animateMotion
                          dur={`${2.8 + (idx % 2) * 0.3}s`}
                          repeatCount="indefinite"
                          begin={`${idx * 0.2}s`}
                        >
                          <mpath href={`#mob-line-${node.id}`} />
                        </animateMotion>
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* 2. Mobile 3 Infra Dashed Lines */}
              <g className="mobile-infra-connections" clipPath="url(#infra-clip-mob)">
                {INFRA_NODES.map((node) => {
                  const isHovered = hoveredTileId === node.id;
                  return (
                    <g key={`mob-infra-conn-${node.id}`}>
                      <path
                        d={node.mobilePath}
                        fill="none"
                        stroke="#F2F4F7"
                        strokeWidth={3.5}
                      />
                      <path
                        d={node.mobilePath}
                        fill="none"
                        stroke={node.color}
                        strokeWidth={isHovered ? 2.5 : 2}
                        strokeDasharray="6 6"
                        strokeLinecap="round"
                        className="transition-opacity duration-200"
                        style={{
                          opacity: isHovered ? 1 : 0.7,
                        }}
                      >
                        {!prefersReducedMotion && linesDrawn && (
                          <animate
                            attributeName="stroke-dashoffset"
                            from="0"
                            to="-12"
                            dur="2.5s"
                            repeatCount="indefinite"
                          />
                        )}
                      </path>
                    </g>
                  );
                })}
              </g>
            </g>

            {/* Mobile Nodes */}
            <g className="mobile-nodes">
              {/* Mobile Centre Node (On Top) */}
              <g
                transform="translate(180, 75)"
                role="group"
                aria-label="Social Tech ICM RETAILS Core Engine"
                onClick={() => setIsCenterHovered(!isCenterHovered)}
              >
                <circle r={60} fill="#2563EB" opacity="0.08" />
                <circle
                  r={55}
                  fill="none"
                  stroke="#93C5FD"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle
                  r={50}
                  fill="#FFFFFF"
                  stroke="#2563EB"
                  strokeWidth={2.5}
                />
                <text
                  textAnchor="middle"
                  dy="-3"
                  className="text-[13px] font-bold fill-[#101828] select-none pointer-events-none tracking-tight"
                >
                  Social Tech
                </text>
                <text
                  textAnchor="middle"
                  dy="13"
                  className="font-mono text-[9px] font-bold fill-[#2563EB] tracking-wider uppercase select-none pointer-events-none"
                >
                  ICM RETAILS
                </text>
              </g>

              {/* 6 Marketplace Nodes in 2-Column Grid Below Centre */}
              {MARKETPLACES.map((node) => {
                const { x, y, r } = node.mobile;
                const isHovered = hoveredNodeId === node.id;
                const isLoaded = loadedLogos[node.id];

                return (
                  <g
                    key={`mob-node-${node.id}`}
                    transform={`translate(${x}, ${isHovered ? y - 4 : y})`}
                    className="cursor-pointer"
                    style={{
                      transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onClick={() => setHoveredNodeId(hoveredNodeId === node.id ? null : node.id)}
                    role="group"
                    aria-label={`Marketplace node: ${node.name}`}
                  >
                    <circle
                      r={r}
                      fill="#FFFFFF"
                      stroke={isHovered ? "#2563EB" : "#E4E7EC"}
                      strokeWidth={isHovered ? 2 : 1.5}
                    />

                    {isLoaded ? (
                      node.fillCircle ? (
                        <image
                          href={`/logos/${node.logoFile}`}
                          x={-(r - 6)}
                          y={-(r - 6)}
                          width={(r - 6) * 2}
                          height={(r - 6) * 2}
                          preserveAspectRatio="xMidYMid slice"
                          clipPath="url(#circle-clip-unit-mob)"
                          aria-label={`${node.name} logo`}
                        >
                          <title>{node.name} logo</title>
                        </image>
                      ) : (
                        <image
                          href={`/logos/${node.logoFile}`}
                          x={-28}
                          y={-18}
                          width={56}
                          height={36}
                          preserveAspectRatio="xMidYMid meet"
                          aria-label={`${node.name} logo`}
                        >
                          <title>{node.name} logo</title>
                        </image>
                      )
                    ) : (
                      <text
                        textAnchor="middle"
                        dy="4"
                        className="text-xs font-bold fill-[#101828] select-none pointer-events-none"
                      >
                        {node.name}
                      </text>
                    )}

                    <text
                      textAnchor="middle"
                      y={r + 18}
                      className={cn(
                        "text-[12px] font-medium fill-[#344054] select-none pointer-events-none",
                        isHovered && "fill-[#2563EB] font-semibold"
                      )}
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}

              {/* Mobile 3 Core Infrastructure Nodes (OMS, INVENTORY, SHIPPING) */}
              {INFRA_NODES.map((node) => {
                const { x, y, w, h, r } = node.mobile;
                const isHovered = hoveredTileId === node.id;

                return (
                  <g
                    key={`mob-infra-${node.id}`}
                    transform={`translate(${x}, ${isHovered ? y - 4 : y})`}
                    className="cursor-pointer"
                    style={{
                      transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onClick={() => setHoveredTileId(hoveredTileId === node.id ? null : node.id)}
                    role="group"
                    aria-label={`Commerce infrastructure node: ${node.name} (${node.fullName})`}
                  >
                    <title>{`${node.name}: ${node.fullName} - ${node.tooltip}`}</title>

                    <g className="infra-tile">
                      {/* 72px rounded-square tile */}
                      <rect
                        x={-w / 2}
                        y={-h / 2}
                        width={w}
                        height={h}
                        rx={r}
                        ry={r}
                        fill="#FFFFFF"
                        stroke={isHovered ? node.color : "#E4E7EC"}
                        strokeWidth={isHovered ? 1.5 : 1}
                        filter="url(#tile-soft-shadow-mob)"
                        className="transition-all duration-200"
                      />

                      {/* Centered Stroke Icon (30px) */}
                      <InfraIcon name={node.iconName} color={node.color} size={30} />

                      {/* Label under tile */}
                      <text
                        textAnchor="middle"
                        y={h / 2 + 18}
                        className={cn(
                          "text-[11px] font-semibold tracking-wider fill-[#344054] uppercase select-none pointer-events-none transition-colors duration-200",
                          isHovered && "fill-[#101828]"
                        )}
                      >
                        {node.name}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
