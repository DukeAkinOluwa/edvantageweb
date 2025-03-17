import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edvantage",
  description: "A platform college students to organise, manage their time effectively and gain access relevant educational materials.",
  metadataBase: new URL('https://BUESALibrary.com'),
  openGraph: {
    url: ".",
    title: "Edvantage - Your go-to Organiser",
    description: "A platform college students to organise, manage their time effectively and gain access relevant educational materials.",
    siteName: "Edvantage Hub",
    images: [
      {
        url: "./Images/edvantagewebicon.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Edvantage",
    title: "Edvantage - Your go-to Organiser",
    description: "A platform college students to organise, manage their time effectively and gain access relevant educational materials.",
    images: "./Images/edvantagewebicon.jpg",
  },
  icons: './Images/edvantagewebicon.jpg',
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
      </body>
    </html>
  );
}
