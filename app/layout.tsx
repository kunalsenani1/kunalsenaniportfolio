import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kunal Senani | Video Editor",
  description:
    "Premium cinematic portfolio for Kunal Senani, a Jaipur-based video editor for reels, YouTube, podcasts, campaigns, and cinematic stories.",
  openGraph: {
    title: "Kunal Senani | Video Editor",
    description:
      "9+ years of cinematic editing, social-first content, campaigns, podcasts, reels, and brand films.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
