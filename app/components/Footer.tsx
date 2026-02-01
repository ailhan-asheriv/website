"use client";

import { useTranslations } from "next-intl";
import { Link } from "../../lib/routing";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-dark-light border-t border-dark-lighter">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">A&apos;SHERIV</h3>
            <p className="text-sm text-gray-light leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("legal")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-light hover:text-primary transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("contact")}</h4>
            <a
              href="mailto:info@asheriv.com"
              className="text-sm text-gray-light hover:text-primary transition-colors"
            >
              info@asheriv.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
