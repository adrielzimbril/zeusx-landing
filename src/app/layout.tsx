import type { Metadata } from "next";
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
  metadataBase: new URL("https://zeusx-landing.adrielzimbril.com"),
  title: "Zeusx | Flagship Tactical Drone Systems",
  description:
    "Day 11/30 of the AI-Generated Landing Page Challenge. Zeusx presents flagship tactical drone platforms for reconnaissance, fleet coordination, secure command workflows, and defense-grade aerial operations.",
  keywords: [
    "Zeusx",
    "tactical drones",
    "defense drone systems",
    "military drone platform",
    "aerial reconnaissance",
    "ISR drone",
    "command mesh",
    "fleet telemetry",
    "drone landing page",
    "Next.js",
    "React",
    "Tailwind CSS",
    "bento design",
    "AI challenge",
  ],
  openGraph: {
    title: "Zeusx | Flagship Tactical Drone Systems",
    description:
      "A high-fidelity landing page for Zeusx flagship tactical drone platforms and command infrastructure.",
    url: "https://zeusx-landing.adrielzimbril.com",
    siteName: "Zeusx",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Zeusx tactical drone systems landing page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeusx | Flagship Tactical Drone Systems",
    description:
      "A high-fidelity landing page for Zeusx flagship tactical drone platforms and command infrastructure.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
