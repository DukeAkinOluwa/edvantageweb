import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

export const metadata: Metadata = {
  title: "Edvantage",
  description: "The go-to platform for tertiary students manage time effectively, collaborate with peers, and access academic resources - all in one platform",
  metadataBase: new URL('https://edvantage.com.ng'),
  openGraph: {
    url: ".",
    title: "Edvantage Student Hub",
    description: "The go-to platform for tertiary students manage time effectively, collaborate with peers, and access academic resources - all in one platform",
    siteName: "Edvantage Hub",
    images: [
      {
        url: "./Images/edvantagewebicon.png",
        width: 500,
        height: 500,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Edvantage",
    title: "Edvantage Student Hub",
    description: "The go-to platform for tertiary students manage time effectively, collaborate with peers, and access academic resources - all in one platform",
    images: "./Images/edvantagewebicon.png",
  },
  icons: './Images/edvantagewebicon.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
