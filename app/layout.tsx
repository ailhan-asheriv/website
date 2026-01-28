import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A'SHERIV — AI-driven Maritime Operations Platform",
  description:
    "Digital twins and predictive intelligence for asset integrity, maintenance planning, and voyage-wide operational visibility. Built for complex stakeholder environments.",
  openGraph: {
    title: "A'SHERIV — AI-driven Maritime Operations Platform",
    description:
      "Digital twins and predictive intelligence for asset integrity, maintenance planning, and voyage-wide operational visibility.",
    type: "website",
    url: "https://www.asheriv.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "A'SHERIV — AI-driven Maritime Operations Platform",
    description:
      "Digital twins and predictive intelligence for asset integrity, maintenance planning, and voyage-wide operational visibility.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${libreBaskerville.variable} font-sans`}>{children}</body>
    </html>
  );
}

