'use client';

import PageTransition from '@/components/PageTransition';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import FaqItem from '@/components/FaqItem';
import Link from 'next/link';

import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
// import { useState } from 'react';
// import { usePathname } from 'next/navigation';

// Layouts
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
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
    const features = [
      {
        icon: (
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
            <line x1='16' y1='2' x2='16' y2='6'></line>
            <line x1='8' y1='2' x2='8' y2='6'></line>
            <line x1='3' y1='10' x2='21' y2='10'></line>
          </svg>
        ),
        title: 'Time & Task Management',
        description: 'Centralized academic calendar, reminders, and prioritization systems to help you stay organized and meet deadlines.'
      },
      {
        icon: (
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
            <circle cx='9' cy='7' r='4'></circle>
            <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
            <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
          </svg>
        ),
        title: 'Collaboration & Study Groups',
        description: 'Create study squads, join class groups, and collaborate on projects with ease.'
      },
      {
        icon: (
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <polyline points='22 12 18 12 15 21 9 3 6 12 2 12'></polyline>
          </svg>
        ),
        title: 'Gamification & Motivation',
        description: 'Earn points, compete on leaderboards, and receive rewards for achieving academic milestones.'
      },
      {
        icon: (
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
            <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
          </svg>
        ),
        title: 'Academic Resources & AI Support',
        description: 'Access a rich library of course materials and get AI assistance in understanding complex topics.'
      }
    ];
  
    const faqs = [
      {
        question: 'What is Edvantage?',
        answer: 'Edvantage is a productivity and collaboration tool designed specifically for tertiary students. It helps with time management, collaboration, and provides academic resources to enhance your learning experience.'
      },
      {
        question: 'How much does Edvantage cost?',
        answer: 'Edvantage offers a freemium model. Basic features are available for free, with premium features accessible for ₦900/year - an affordable price designed specifically for students.'
      },
      {
        question: 'Can I use Edvantage on multiple devices?',
        answer: 'Yes! Edvantage is available on web and mobile platforms, allowing you to access your academic tools and resources anywhere, anytime.'
      },
      {
        question: 'How do study squads work?',
        answer: 'Study squads allow you to create or join groups with classmates, share resources, discuss topics, and collaborate on projects. You can set group goals, assign tasks, and track progress together.'
      },
      {
        question: 'Is my data secure with Edvantage?',
        answer: 'Absolutely. We take data privacy and security seriously. All your personal information and academic data are encrypted and protected according to the highest industry standards.'
      }
    ];
  
    return (
      <PageTransition>
        <Hero 
          title='Empowering Students for Academic Success'
          subtitle='Edvantage helps tertiary students manage time effectively, collaborate with peers, and access academic resources - all in one platform.'
          ctaText='Get Started'
          ctaLink='/contact'
          secondaryCtaText='Learn More'
          secondaryCtaLink='/about'
          backgroundImage='https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        />
      </PageTransition>
    );
  }
}
