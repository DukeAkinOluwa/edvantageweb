'use client'

import { useEffect } from 'react';

import PageTransition from "@/components/PageTransition";
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

// Layouts
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';

export default function NotFound() {
    return (
      <>
        <Toaster />
          <Sonner />
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow'>
              <Index />
            </main>
            <Footer />
          </div>
      </>
    );
    function Index () {
        const location = usePathname();
      
        useEffect(() => {
          console.error(
            "404 Error: User attempted to access non-existent route:",
            location
          );
        }, [location]);
      
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
              <a href="/" className="text-blue-500 hover:text-blue-700 underline">
                Return to Home
              </a>
            </div>
          </div>
        );
    }
}