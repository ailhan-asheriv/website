"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../lib/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          locale === "en"
            ? "bg-primary text-dark font-semibold"
            : "text-gray-light hover:text-primary"
        }`}
      >
        EN
      </button>
      <span className="text-gray-dark">/</span>
      <button
        onClick={() => switchLocale("tr")}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          locale === "tr"
            ? "bg-primary text-dark font-semibold"
            : "text-gray-light hover:text-primary"
        }`}
      >
        TR
      </button>
    </div>
  );
}

