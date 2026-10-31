"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
];

export interface NavbarProps {
  variant?: "default" | "embedded";
}

export function Navbar({ variant = "default" }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // Scroll direction detection for show/hide behavior
  useEffect(() => {
    if (variant === "embedded") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // On homepage, scrolled means past hero banner (~380px); on subpages, threshold is 20px
      setIsScrolled(isHomepage ? currentScrollY > 380 : currentScrollY > 20);

      // Don't hide navbar if mobile menu is open
      if (isMobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      // Hide on scroll down, show on scroll up (for subpages)
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen, isHomepage, variant]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change without useEffect cascading render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // ========================================================
  // VARIANT 1: EMBEDDED INSIDE HERO BACKGROUND BANNER
  // ========================================================
  if (variant === "embedded") {
    return (
      <div className="relative z-30 w-full">
        <div className="mx-auto flex h-16 sm:h-[4.25rem] w-full items-center justify-between rounded-2xl bg-white px-4 sm:px-6 lg:px-8 shadow-sm border border-[#E4E7EC]">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden items-center gap-1 sm:gap-2 md:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
                  pathname === item.href
                    ? "text-[#101828] bg-[#F5F7FA] font-semibold"
                    : "text-[#667085] hover:text-[#101828] hover:bg-[#F5F7FA]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center justify-center rounded-xl bg-[#101828] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1E293B] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Right Action */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#101828] px-3 py-1.5 text-xs font-semibold text-white"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E4E7EC] bg-white text-[#101828] transition-colors hover:bg-[#F5F7FA]"
            >
              <span className="sr-only">Toggle navigation menu</span>
              <div className="relative h-4 w-4">
                <span
                  className={cn(
                    "absolute left-0 top-0.5 block h-0.5 w-4 bg-[#101828] transition-all duration-200",
                    isMobileMenuOpen ? "top-1.5 rotate-45" : ""
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-2 block h-0.5 w-4 bg-[#101828] transition-opacity duration-200",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-3.5 block h-0.5 w-4 bg-[#101828] transition-all duration-200",
                    isMobileMenuOpen ? "top-1.5 -rotate-45" : ""
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex flex-col bg-white md:hidden overflow-y-auto"
            >
              <div className="flex h-16 items-center justify-between border-b border-[#E4E7EC] px-6">
                <Logo />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg border border-[#E4E7EC] p-2 text-sm text-[#101828]"
                >
                  ✕ Close
                </button>
              </div>
              <div className="flex flex-1 flex-col justify-between px-6 py-8">
                <div className="flex flex-col space-y-2">
                  {[...NAV_LINKS, { label: "Contact Us", href: "/contact" }].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                        pathname === item.href
                          ? "text-[#101828] bg-[#F5F7FA] font-semibold"
                          : "text-[#667085] hover:text-[#101828] hover:bg-[#F5F7FA]"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ========================================================
  // VARIANT 2: DEFAULT ROOT HEADER (IN LAYOUT)
  // On homepage: fixed overlay that slides in only when scrolled past hero
  // On subpages: standard sticky header
  // ========================================================
  const shouldShowRootHeader = isHomepage ? isScrolled : isVisible;

  return (
    <>
      <header
        className={cn(
          isHomepage ? "fixed top-0 inset-x-0 z-50 w-full" : "sticky top-0 z-50 w-full",
          "transition-transform duration-300 ease-in-out",
          shouldShowRootHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
          isScrolled || isHomepage
            ? "border-b border-[#E4E7EC] bg-white/95 backdrop-blur-md shadow-sm"
            : "border-b border-[#E4E7EC] bg-white"
        )}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation: Home, About, Features */}
          <nav aria-label="Main Navigation" className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
                  pathname === item.href
                    ? "text-[#101828] bg-[#F5F7FA] font-semibold"
                    : "text-[#667085] hover:text-[#101828] hover:bg-[#F5F7FA]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action: Contact Us button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="relative hidden sm:inline-flex items-center justify-center rounded-xl bg-[#101828] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1E293B] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] active:scale-[0.98]"
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E4E7EC] bg-white text-[#101828] transition-colors hover:bg-[#F5F7FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] md:hidden"
            >
              <span className="sr-only">Toggle navigation menu</span>
              <div className="relative h-4 w-4">
                <span
                  className={cn(
                    "absolute left-0 top-0.5 block h-0.5 w-4 bg-[#101828] transition-all duration-200",
                    isMobileMenuOpen ? "top-1.5 rotate-45" : ""
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-2 block h-0.5 w-4 bg-[#101828] transition-opacity duration-200",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-3.5 block h-0.5 w-4 bg-[#101828] transition-all duration-200",
                    isMobileMenuOpen ? "top-1.5 -rotate-45" : ""
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[4.5rem] z-40 flex flex-col bg-white md:hidden overflow-y-auto border-t border-[#E4E7EC]"
          >
            <div className="flex flex-1 flex-col justify-between px-6 py-8">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.05,
                    },
                  },
                }}
                className="flex flex-col space-y-2"
              >
                {[...NAV_LINKS, { label: "Contact Us", href: "/contact" }].map((item) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                        pathname === item.href
                          ? "text-[#101828] bg-[#F5F7FA] font-semibold"
                          : "text-[#667085] hover:text-[#101828] hover:bg-[#F5F7FA]"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Menu Footer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.25 }}
                className="mt-8 flex flex-col gap-3 pt-6 border-t border-[#E4E7EC]"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-12 w-full items-center justify-center rounded-xl bg-[#101828] text-base font-semibold text-white transition-colors hover:bg-[#1E293B]"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
