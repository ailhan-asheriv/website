"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "../../lib/routing";

type MenuKey = "platform" | "intelligence" | "developers" | "company" | null;

const platformLinks = [
  { href: "/platform", label: "AshMOP", desc: "Maritime Operations Platform" },
  { href: "/compliance-evidence", label: "Evidence Pack", desc: "Audit-ready documentation" },
];

const intelligenceLinks = [
  { href: "/maintenance-intelligence", label: "Asset Intelligence", desc: "machinery health & RUL" },
  { href: "/operational-digital-twin", label: "Operational Intelligence", desc: "structured logs & decisions" },
  { href: "/lifecycle-intelligence", label: "Lifecycle Intelligence", desc: "vessel birth-to-end-of-life" },
];

const developerLinks = [
  { href: "/?role=Developer#contact", label: "Request API Access" },
];

const companyLinks = [
  { href: "/about", label: "About A'SHERIV" },
  { href: "/#roadmap", label: "Our Vision" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<MenuKey>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as "en" | "tr";
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass =
    "text-sm text-white/90 hover:text-[#00D4FF] transition-colors duration-150 whitespace-nowrap py-2 px-2";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const switchLocale = (nextLocale: "en" | "tr") => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#0A0F1E]/95 backdrop-blur-md border-b border-white/10"
          : "bg-[#0A0F1E]/90 backdrop-blur-sm"
      }`}
    >
      <div className="w-full max-w-[100vw] px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
        <div className="flex items-center justify-between h-16 min-h-[4rem]">
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="A'SHERIV Home">
            <Image
              src="/logo.png"
              alt="A'SHERIV"
              width={140}
              height={46}
              className="h-8 w-auto sm:h-9"
              priority
              sizes="140px"
            />
          </Link>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 xl:gap-2 flex-shrink min-w-0">
              {/* Platform dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("platform")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/platform"
                  className={`${navLinkClass} inline-flex items-center gap-0.5`}
                  aria-expanded={openDropdown === "platform"}
                  aria-haspopup="true"
                >
                  Platform
                  <svg className="w-4 h-4 ml-0.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {openDropdown === "platform" && (
                  <div className="absolute top-full left-0 pt-1 min-w-[220px]">
                    <div className="rounded-md border border-white/15 bg-[#0F1729] py-2 shadow-lg">
                      {platformLinks.map(({ href, label, desc }) => (
                        <Link key={`${href}-${label}`} href={href} className="block px-4 py-2 transition-colors hover:bg-white/5" onClick={() => setOpenDropdown(null)}>
                          <p className="text-sm text-white/90">{label}</p>
                          <p className="text-xs text-white/60">{desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Intelligence dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("intelligence")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/#intelligence"
                  className={`${navLinkClass} inline-flex items-center gap-0.5`}
                  aria-expanded={openDropdown === "intelligence"}
                  aria-haspopup="true"
                >
                  Intelligence
                  <svg className="w-4 h-4 ml-0.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {openDropdown === "intelligence" && (
                  <div className="absolute top-full left-0 pt-1 min-w-[280px]">
                    <div className="rounded-md border border-white/15 bg-[#0F1729] py-2 shadow-lg">
                      {intelligenceLinks.map(({ href, label, desc }) => (
                        <Link key={`${href}-${label}`} href={href} className="block px-4 py-2 transition-colors hover:bg-white/5" onClick={() => setOpenDropdown(null)}>
                          <p className="text-sm text-white/90">{label}</p>
                          <p className="text-xs text-white/60">{desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Developers dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("developers")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/#developers"
                  className={`${navLinkClass} inline-flex items-center gap-0.5`}
                  aria-expanded={openDropdown === "developers"}
                  aria-haspopup="true"
                >
                  Developers
                  <svg className="w-4 h-4 ml-0.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {openDropdown === "developers" && (
                  <div className="absolute top-full left-0 pt-1 min-w-[220px]">
                    <div className="rounded-md border border-white/15 bg-[#0F1729] py-2 shadow-lg">
                      {developerLinks.map(({ href, label }) => (
                        <Link key={`${href}-${label}`} href={href} className="block px-4 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-[#00D4FF] transition-colors" onClick={() => setOpenDropdown(null)}>
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Company dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("company")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/about"
                  className={`${navLinkClass} inline-flex items-center gap-0.5`}
                  aria-expanded={openDropdown === "company"}
                  aria-haspopup="true"
                >
                  Company
                  <svg className="w-4 h-4 ml-0.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {openDropdown === "company" && (
                  <div className="absolute top-full left-0 pt-1 min-w-[220px]">
                    <div className="rounded-md border border-white/15 bg-[#0F1729] py-2 shadow-lg">
                      {companyLinks.map(({ href, label }) => (
                        <Link key={`${href}-${label}`} href={href} className="block px-4 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-[#00D4FF] transition-colors" onClick={() => setOpenDropdown(null)}>
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mx-3 h-4 w-px bg-white/20" />

            <div className="flex items-center gap-1 text-xs font-semibold">
              <button
                onClick={() => switchLocale("en")}
                className={`px-1.5 py-1 transition-colors ${
                  locale === "en" ? "text-[#00D4FF]" : "text-white/50 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-white/20">/</span>
              <button
                onClick={() => switchLocale("tr")}
                className={`px-1.5 py-1 transition-colors ${
                  locale === "tr" ? "text-[#00D4FF]" : "text-white/50 hover:text-white"
                }`}
              >
                TR
              </button>
            </div>

            <div className="mx-3 h-4 w-px bg-white/20" />

            {isHome ? (
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-md bg-[#00D4FF] px-4 py-2 text-sm font-semibold text-[#0A0F1E] transition hover:bg-[#67E5FF] whitespace-nowrap"
              >
                Request Demo
              </button>
            ) : (
              <Link
                href="/contact"
                className="rounded-md bg-[#00D4FF] px-4 py-2 text-sm font-semibold text-[#0A0F1E] transition hover:bg-[#67E5FF] whitespace-nowrap"
              >
                Request Demo
              </Link>
            )}
          </div>

          {/* Hamburger: only on small screens (below lg) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex-shrink-0 text-offwhite hover:text-cyan p-2.5 rounded-section hover:bg-navy-light/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu (below lg) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            <Link href="/platform" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left text-sm text-white/90 hover:text-[#00D4FF] transition-colors py-3 px-4">Platform</Link>
            {platformLinks.map(({ href, label, desc }) => (
              <Link key={`${href}-${label}`} href={href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left transition-colors py-2 px-4 pl-6 hover:bg-white/5">
                <p className="text-sm text-white/70 hover:text-[#00D4FF]">{label}</p>
                <p className="text-xs text-white/50">{desc}</p>
              </Link>
            ))}
            <Link href="/#intelligence" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left text-sm text-white/90 hover:text-[#00D4FF] transition-colors py-3 px-4">Intelligence</Link>
            {intelligenceLinks.map(({ href, label, desc }) => (
              <Link key={`${href}-${label}`} href={href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left transition-colors py-2 px-4 pl-6 hover:bg-white/5">
                <p className="text-sm text-white/70 hover:text-[#00D4FF]">{label}</p>
                <p className="text-xs text-white/50">{desc}</p>
              </Link>
            ))}
            <Link href="/#developers" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left text-sm text-white/90 hover:text-[#00D4FF] transition-colors py-3 px-4">Developers</Link>
            {developerLinks.map(({ href, label }) => (
              <Link key={`${href}-${label}`} href={href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left text-sm text-white/70 hover:text-[#00D4FF] transition-colors py-2 px-4 pl-6">{label}</Link>
            ))}
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left text-sm text-white/90 hover:text-[#00D4FF] transition-colors py-3 px-4">Company</Link>
            {companyLinks.map(({ href, label }) => (
              <Link key={`${href}-${label}`} href={href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left text-sm text-white/70 hover:text-[#00D4FF] transition-colors py-2 px-4 pl-6">{label}</Link>
            ))}
            <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
              <div className="px-4 py-2 flex items-center gap-1 text-xs font-semibold">
                <button onClick={() => switchLocale("en")} className={locale === "en" ? "text-[#00D4FF]" : "text-white/60 hover:text-white"}>EN</button>
                <span className="text-white/30">/</span>
                <button onClick={() => switchLocale("tr")} className={locale === "tr" ? "text-[#00D4FF]" : "text-white/60 hover:text-white"}>TR</button>
              </div>
              {isHome ? (
                <button onClick={() => scrollToSection("contact")} className="block w-full text-center px-4 py-3 bg-[#00D4FF] text-[#0A0F1E] text-sm font-semibold rounded-md">REQUEST DEMO</button>
              ) : (
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-4 py-3 bg-[#00D4FF] text-[#0A0F1E] text-sm font-semibold rounded-md">REQUEST DEMO</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
