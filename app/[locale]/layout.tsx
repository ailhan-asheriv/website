import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../lib/routing";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.asheriv.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = "ASHERIV";
  const description = isEn
    ? "A'SHERIV builds digital twin infrastructure for shipbuilding, vessel operations, and lifecycle intelligence—connecting shipyard production data, vessel operational systems, maintenance records, and targeted sensing into a unified maritime intelligence platform."
    : "A'SHERIV, gemi inşası, gemi operasyonları ve yaşam döngüsü istihbaratı için dijital ikiz altyapısı kurar—tersane üretim verilerini, gemi operasyon sistemlerini, bakım kayıtlarını ve hedefli sensörleri tek bir denizcilik istihbarat platformunda birleştirir.";

  return {
    title: { default: title, template: "%s | ASHERIV" },
    description,
    openGraph: {
      title: isEn
        ? "ASHERIV — Digital Twin Infrastructure for Shipbuilding and Vessel Operations"
        : "ASHERIV — Gemi İnşası ve Gemi Operasyonları için Dijital İkiz Altyapısı",
      description,
      type: "website",
      locale: isEn ? "en_GB" : "tr_TR",
      url: `${baseUrl}/${locale}`,
      siteName: "ASHERIV",
    },
    twitter: {
      card: "summary_large_image",
      title: "ASHERIV",
      description,
    },
    alternates: { canonical: `${baseUrl}/${locale}` },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans`}>
        <a href="#main-content" className="skip-link z-[100]">
          Skip to main content
        </a>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

