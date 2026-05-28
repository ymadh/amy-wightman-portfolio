import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amy Wightman - Director of Engineering",
  description: "Results-driven engineering leader with 15+ years of experience building and scaling high-performing product organizations. Currently Director of Engineering leading 25+ person division.",
  keywords: ["Engineering Director", "Technical Leadership", "Product Engineering", "Team Management", "Charlotte NC"],
  authors: [{ name: "Amy Wightman" }],
  openGraph: {
    title: "Amy Wightman - Director of Engineering",
    description: "Engineering leadership portfolio showcasing 15+ years of experience scaling product organizations and delivering business impact through technical excellence.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} min-h-screen antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}