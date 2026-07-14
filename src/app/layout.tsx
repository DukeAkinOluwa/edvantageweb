import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import "./style.scss"
import { AuthProvider } from "@/contexts/AuthContext";
import { AchievementProvider } from "@/contexts/AchievementContext";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Edvantae Limited | Student Hub",
  description: "The go-to platform for tertiary students manage time effectively, collaborate with peers, and access academic resources - all in one platform",
  metadataBase: new URL('https://edvantae.com.ng'),
  openGraph: {
    url: ".",
    title: "Edvantae Limited | Student Hub",
    description: "The go-to platform for tertiary students manage time effectively, collaborate with peers, and access academic resources - all in one platform",
    siteName: "Edvantae Hub",
    images: [
      {
        url: "/Images/edvantaewebicon.png",
        width: 500,
        height: 500,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Edvantae",
    title: "Edvantae Limited | Student Hub",
    description: "The go-to platform for tertiary students manage time effectively, collaborate with peers, and access academic resources - all in one platform",
    images: "/Images/edvantaewebicon.png",
  },
  icons: '/Images/edvantaewebicon.png',
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
        <AuthProvider>
          <AchievementProvider>
            <PageTransition>
              {children}
            </PageTransition>
          </AchievementProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
