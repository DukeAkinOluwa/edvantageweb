import type { Metadata } from "next";
import DashboardShell from "./dashboardshell";

export const metadata: Metadata = {
  title: "Dashboard - Edvantage Student Hub",
  openGraph: {
    title: "Dashboard - Edvantage Student Hub",
  },
  twitter: {
    title: "Dashboard - Edvantage Student Hub",
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}