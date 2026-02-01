"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-dark-lighter"
          : "bg-dark/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-width px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-bold text-white hover:text-primary transition-colors"
          >
            A&apos;SHERIV
          </button>
          
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-gray-light hover:text-primary transition-all duration-150"
            >
              {t("about")}
            </button>
            <button
              onClick={() => scrollToSection("platform")}
              className="text-sm text-gray-light hover:text-primary transition-all duration-150"
            >
              {t("platform")}
            </button>
            <button
              onClick={() => scrollToSection("integration")}
              className="text-sm text-gray-light hover:text-primary transition-all duration-150"
            >
              {t("integration")}
            </button>
            <button
              onClick={() => scrollToSection("stakeholders")}
              className="text-sm text-gray-light hover:text-primary transition-all duration-150"
            >
              {t("stakeholders")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 bg-gradient-to-r from-primary to-accent text-dark font-medium hover:from-primary-dark hover:to-accent-dark transition-all duration-150 rounded-lg"
            >
              {t("contact")}
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-light"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-dark-lighter py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-sm text-gray-light hover:text-primary transition-colors py-2"
            >
              {t("about")}
            </button>
            <button
              onClick={() => scrollToSection("platform")}
              className="block w-full text-left text-sm text-gray-light hover:text-primary transition-colors py-2"
            >
              {t("platform")}
            </button>
            <button
              onClick={() => scrollToSection("integration")}
              className="block w-full text-left text-sm text-gray-light hover:text-primary transition-colors py-2"
            >
              {t("integration")}
            </button>
            <button
              onClick={() => scrollToSection("stakeholders")}
              className="block w-full text-left text-sm text-gray-light hover:text-primary transition-colors py-2"
            >
              {t("stakeholders")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full px-4 py-2 bg-gradient-to-r from-primary to-accent text-dark text-sm font-medium hover:from-primary-dark hover:to-accent-dark transition-all text-center rounded-lg"
            >
              {t("contact")}
            </button>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
