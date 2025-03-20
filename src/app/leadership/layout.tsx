import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Executive Leaders",
  description: "Meet the visionaries behind Edvantage who are passionate about transforming the academic experience for tertiary students.",
  openGraph: {
    title: "Our Executive Leaders",
    description: "Meet the visionaries behind Edvantage who are passionate about transforming the academic experience for tertiary students.",
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