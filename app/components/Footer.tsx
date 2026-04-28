"use client";

import { Link } from "../../lib/routing";
import { usePathname } from "../../lib/routing";

export default function Footer() {
  const pathname = usePathname();
  const isTr = pathname.startsWith("/tr");

  return (
    <footer className="bg-[#070C18] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/platform" className="text-sm text-[#9CA3AF] hover:text-[#00D4FF] transition-colors">
                  AshMOP
                </Link>
              </li>
              <li>
                <Link href="/sim" className="text-sm text-[#9CA3AF] hover:text-[#00D4FF] transition-colors">
                  SIM
                </Link>
              </li>
              <li>
                <Link href="/compliance-evidence" className="text-sm text-[#9CA3AF] hover:text-[#00D4FF] transition-colors">
                  {isTr ? "Kanit Paketi" : "Evidence Pack"}
                </Link>
              </li>
              <li>
                <Link href="/maintenance-intelligence" className="text-sm text-[#9CA3AF] hover:text-[#00D4FF] transition-colors">
                  Asset Intelligence
                </Link>
              </li>
              <li>
                <Link href="/lifecycle-intelligence" className="text-sm text-[#9CA3AF] hover:text-[#00D4FF] transition-colors">
                  Lifecycle Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-[#9CA3AF] hover:text-[#00D4FF] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#9CA3AF] hover:text-[#00D4FF] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-[#9CA3AF] hover:text-[#00D4FF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:info@asheriv.com"
                className="text-sm text-[#9CA3AF] hover:text-[#00D4FF] transition-colors"
              >
                info@asheriv.com
              </a>
              <a
                href="https://www.linkedin.com/company/a-sheriv"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#9CA3AF] hover:text-[#00D4FF] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
