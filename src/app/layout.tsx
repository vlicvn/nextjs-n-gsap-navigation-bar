import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Menu from "@/components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js X GSAP Navigation Bar",
  description: "A Next.js project with GSAP navigation bar animation",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
