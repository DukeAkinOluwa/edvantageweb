import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Edvantage",
  description: "Edvantage simplifies the academic journey for tertiary students by providing an engaging and efficient platform that integrates time management, collaboration, and academic tools.",
  openGraph: {
    title: "About Edvantage",
    description: "Edvantage simplifies the academic journey for tertiary students by providing an engaging and efficient platform that integrates time management, collaboration, and academic tools.",
  },
  twitter:{
    title: "About Edvantage",
    description: "Edvantage simplifies the academic journey for tertiary students by providing an engaging and efficient platform that integrates time management, collaboration, and academic tools.",
  },
}

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        {children}
      </>
    );
  }