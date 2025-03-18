import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Our Executive Leaders",
  description: "Meet the visionaries behind Edvantage who are passionate about transforming the academic experience for tertiary students.",
  metadataBase: new URL('https://edvantage.com.ng'),
  openGraph: {
    title: "Our Executive Leaders",
    description: "Meet the visionaries behind Edvantage who are passionate about transforming the academic experience for tertiary students.",
    siteName: "Edvantage Hub",
    images: [
      {
        url: "./Images/edvantagewebicon.png",
        width: 500,
        height: 500,
      },
    ],
  },
  twitter:{
    title: "About Edvantage",
    description: "Edvantage simplifies the academic journey for tertiary students by providing an engaging and efficient platform that integrates time management, collaboration, and academic tools.",
    card: "summary_large_image",
    site: "@Edvantage",
    images: "./Images/edvantagewebicon.png",
  },
  icons: './Images/edvantagewebicon.png',
}

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