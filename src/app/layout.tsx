import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const SITE_URL = "https://hackprinceton-demo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HackPrinceton Fall '24 Demo",
    template: "%s | HackPrinceton",
  },
  description:
    "HackPrinceton Fall 2024 hackathon demo project — built at Princeton University's premier hackathon.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "HackPrinceton",
    title: "HackPrinceton Fall '24 Demo",
    description:
      "HackPrinceton Fall 2024 hackathon demo project — built at Princeton University's premier hackathon.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HackPrinceton Fall 2024 Demo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hackprinceton",
    creator: "@kevskgs",
    title: "HackPrinceton Fall '24 Demo",
    description:
      "HackPrinceton Fall 2024 hackathon demo project — built at Princeton University's premier hackathon.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
