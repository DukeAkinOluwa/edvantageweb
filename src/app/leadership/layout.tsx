import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Our Executive Leaders",
  description: "Meet the visionaries behind Edvantage who are passionate about transforming the academic experience for tertiary students."
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