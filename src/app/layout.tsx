import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Averi — Creative Full-Stack & Mobile Engineer",
  description:
    "High-converting developer portfolio in Light Mode featuring high-performance web systems, distributed APIs, and mobile architecture. Built with Next.js, Tailwind CSS, TypeScript, and GSAP.",
  keywords: [
    "Full-Stack Engineer",
    "Mobile Developer",
    "Next.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Portfolio",
  ],
  authors: [{ name: "John Averi" }],
  openGraph: {
    title: "John Averi — Creative Full-Stack & Mobile Engineer",
    description: "High-performance web systems, distributed APIs, and mobile architecture.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
