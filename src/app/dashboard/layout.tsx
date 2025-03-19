'use client';

import React, { useState, useEffect } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Check if sidebar is collapsed from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState) {
      setIsSidebarCollapsed(savedState === 'true');
    }
  }, []);

  // Handler for sidebar toggle
  const handleSidebarToggle = (collapsed: boolean) => {
    setIsSidebarCollapsed(collapsed);
    localStorage.setItem('sidebarCollapsed', String(collapsed));
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] dark:bg-[hsl(var(--background))] flex transition-all duration-300">
      <DashboardSidebar onToggleCollapse={handleSidebarToggle} />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${ isSidebarCollapsed ? 'md:ml-16' : 'md:ml-64' }`}>
        <DashboardHeader />
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}