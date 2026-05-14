import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BulkSystem — The OS for Your Body",
  description: "Nutrition, training, recovery and analytics. One system. Everything connected. Built for people who take progress seriously.",
  keywords: ["fitness system", "nutrition tracking", "training app", "body composition", "bulk", "progressive overload"],
  openGraph: {
    title: "BulkSystem — The OS for Your Body",
    description: "Built for people who take progress seriously. Nutrition. Training. Recovery. Analytics.",
    type: "website",
    siteName: "BulkSystem",
  },
  twitter: {
    card: "summary_large_image",
    title: "BulkSystem — The OS for Your Body",
    description: "Built for people who take progress seriously.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#050505] text-[#F5F5F5] antialiased">{children}</body>
    </html>
  );
}
