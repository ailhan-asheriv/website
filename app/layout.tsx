import { Inter } from "next/font/google";
import { routing } from "../lib/routing";
import { redirect } from "next/navigation";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
