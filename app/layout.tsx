import type { Metadata } from "next";
import { Antonio, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mohtisham Khan — UI Engineer & Frontend Developer",
    template: "%s | Mohtisham Khan",
  },
  description:
    "Portfolio of Mohtisham Khan, a UI Engineer & Frontend Developer building accessible, high-performance web interfaces with React, Next.js, and TypeScript.",
  keywords: [
    "UI Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Portfolio",
  ],
  authors: [{ name: "Mohtisham Khan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mohtisham Khan — UI Engineer & Frontend Developer",
    title: "Mohtisham Khan — UI Engineer & Frontend Developer",
    description:
      "Accessible, high-performance interfaces — designed with care and engineered to last.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohtisham Khan — UI Engineer & Frontend Developer",
    description:
      "Accessible, high-performance interfaces — designed with care and engineered to last.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html suppressHydrationWarning
      lang="en"
      data-scroll-behavior="smooth"
      className={`${antonio.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
