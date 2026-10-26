import type { Metadata } from "next";
import DashboardShell from "./dashboardshell";

export const metadata: Metadata = {
  title: "Dashboard - Edvantae OneCampus",
  openGraph: {
    title: "Dashboard - Edvantae OneCampus",
  },
  twitter: {
    title: "Dashboard - Edvantae OneCampus",
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}