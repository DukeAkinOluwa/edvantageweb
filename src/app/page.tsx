"use client";

import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import FaqItem from "@/components/FaqItem";
import PricingTier from "@/components/PricingTier";
import Link from "next/link";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
// import { useState } from 'react';
// import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from "react";

// Layouts
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import featureStyles from "@/styles/components/featureSection.module.scss"
import statsStyles from "@/styles/components/statsSection.module.scss"
import pricingStyles from "@/styles/components/pricingSectioin.module.scss"

interface CountUpProps {
    end: number;
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}

const CountUp = ({ end, duration = 2000, decimals = 0, prefix = "", suffix = "" }: CountUpProps) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let startTime: number | null = null;

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                
                // Easing Out Quad to decelerate smoothly near the end
                const easeProgress = progress * (2 - progress);
                
                setCount(easeProgress * end);

                if (progress < 1) {
                requestAnimationFrame(animate);
                } else {
                setCount(end); // Guard rail to set exact final value
                }
            };

            requestAnimationFrame(animate);
            }
        },
        { threshold: 0.1 } // Starts when 10% of the number container is visible
        );

        if (elementRef.current) {
        observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <div ref={elementRef} className={statsStyles.number}>
        {prefix}
        {count.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        })}
        {suffix}
        </div>
    );
};

export default function Home() {
    return (
        <>
        <Toaster />
        <Sonner />
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
            <Index />
            </main>
            <Footer />
        </div>
        </>
    );

    function Index() {

        // Icon 1: Calendar & Clock (Time & Task)
        const TimeIcon = () => (
        <svg viewBox="0 0 200 200" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <linearGradient id="glow1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.2"/>
            </linearGradient>
            <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#1e3a8a" floodOpacity="0.15"/>
            </filter>
            </defs>
            {/* Background Glow */}
            <circle cx="100" cy="100" r="70" fill="url(#glow1)" filter="url(#shadow1)" />
            {/* Calendar Base */}
            <rect x="60" y="65" width="80" height="80" rx="16" fill="#ffffff" fillOpacity="0.9" stroke="#2a52be" strokeWidth="4"/>
            <rect x="60" y="65" width="80" height="22" rx="4" fill="#2a52be"/>
            {/* Binder Rings */}
            <rect x="75" y="55" width="6" height="16" rx="3" fill="#93c5fd"/>
            <rect x="119" y="55" width="6" height="16" rx="3" fill="#93c5fd"/>
            {/* Grid Detail */}
            <circle cx="80" cy="105" r="5" fill="#2a52be" fillOpacity="0.6"/>
            <circle cx="100" cy="105" r="5" fill="#2a52be" fillOpacity="0.6"/>
            <circle cx="120" cy="105" r="5" fill="#2a52be" fillOpacity="0.6"/>
            <circle cx="80" cy="125" r="5" fill="#2a52be" fillOpacity="0.6"/>
            <circle cx="100" cy="125" r="5" fill="#2a52be"/>
            <circle cx="120" cy="125" r="5" fill="#2a52be" fillOpacity="0.6"/>
        </svg>
        );

        // Icon 2: AI Sparkle Mind (AI Study Assistant)
        const AIIcon = () => (
        <svg viewBox="0 0 200 200" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <linearGradient id="glow2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1"/>
            </linearGradient>
            </defs>
            {/* Glass Core */}
            <circle cx="100" cy="100" r="70" fill="url(#glow2)" stroke="#0284c7" strokeWidth="2" strokeDasharray="6 6" />
            {/* Central AI Sparkle Node */}
            <path d="M100 50 C100 80 80 100 50 100 C80 100 100 120 100 150 C100 120 120 100 150 100 C120 100 100 80 100 50 Z" fill="#0284c7" />
            {/* Secondary Accent Sparkles */}
            <path d="M145 65 C145 75 138 80 128 80 C138 80 145 85 145 95 C145 85 152 80 162 80 C152 80 145 75 145 65 Z" fill="#38bdf8" />
            <circle cx="65" cy="65" r="6" fill="#0284c7" />
            <circle cx="140" cy="135" r="4" fill="#38bdf8" />
        </svg>
        );

        // Icon 3: Linked Nodes (Collaborative Study Squads)
        const SquadsIcon = () => (
        <svg viewBox="0 0 200 200" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <linearGradient id="glow3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.2"/>
            </linearGradient>
            </defs>
            {/* Soft Mesh Ring */}
            <circle cx="100" cy="100" r="70" fill="url(#glow3)" stroke="#64748b" strokeWidth="2" />
            {/* Connecting Network Ribbons */}
            <line x1="75" y1="75" x2="125" y2="75" stroke="#475569" strokeWidth="3" strokeDasharray="4 4" />
            <line x1="75" y1="75" x2="100" y2="130" stroke="#475569" strokeWidth="3" strokeDasharray="4 4" />
            <line x1="125" y1="75" x2="100" y2="130" stroke="#475569" strokeWidth="3" strokeDasharray="4 4" />
            {/* Nodes (representing students) */}
            <circle cx="75" cy="75" r="16" fill="#1e293b" stroke="#ffffff" strokeWidth="3"/>
            <circle cx="125" cy="75" r="16" fill="#475569" stroke="#ffffff" strokeWidth="3"/>
            <circle cx="100" cy="130" r="20" fill="#2a52be" stroke="#ffffff" strokeWidth="4"/>
        </svg>
        );

        // Icon 4: Stacked Books (Resource Library)
        const LibraryIcon = () => (
        <svg viewBox="0 0 200 200" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <linearGradient id="glow4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2"/>
            </linearGradient>
            </defs>
            {/* Base Aura */}
            <circle cx="100" cy="100" r="70" fill="url(#glow4)" />
            {/* Bottom Book */}
            <rect x="55" y="105" width="90" height="28" rx="6" fill="#475569" stroke="#ffffff" strokeWidth="2" />
            <path d="M125 105 V133" stroke="#ffffff" strokeWidth="2" />
            {/* Middle Book */}
            <rect x="65" y="85" width="80" height="24" rx="5" fill="#2a52be" stroke="#ffffff" strokeWidth="2" />
            <path d="M125 85 V109" stroke="#ffffff" strokeWidth="2" />
            {/* Top Angled Book */}
            <g transform="rotate(-8 100 100)">
            <rect x="75" y="60" width="70" height="22" rx="4" fill="#64748b" stroke="#ffffff" strokeWidth="2" />
            <path d="M125 60 V82" stroke="#ffffff" strokeWidth="2" />
            </g>
        </svg>
        );

        const features = [
            {
                title: "Time & Task Management",
                description: "Take control of your academic schedule with structured planners, customizable calendars, and prioritization tools built specifically for student life.",
                icon: <TimeIcon />
            },
            {
                title: "AI Study Assistant",
                description: "Get instant academic support, smart concept summaries, and guided explanations tailored directly to your course materials and topics.",
                icon: <AIIcon />
            },
            {
                title: "Collaborative Study Squads",
                description: "Form study groups, share resources, collaborate on projects, and keep each other accountable in real time.",
                icon: <SquadsIcon />
            },
            {
                title: "Resource Library",
                description: "Access study guides, past questions, lecture notes, and textbook summaries categorized by course and university.",
                icon: <LibraryIcon />
            }
        ];

        const faqs = [
        {
            question: "What is Edvantae?",
            answer:
            "Edvantae is a productivity and collaboration tool designed specifically for tertiary students. It helps with time management, collaboration, and provides academic resources to enhance your learning experience.",
        },
        {
            question: "How much does Edvantae cost?",
            answer:
            "Edvantae offers a freemium model. Basic features are available for free, with premium features accessible for ₦00.00/year - an affordable price designed specifically for students.",
        },
        {
            question: "Can I use Edvantae on multiple devices?",
            answer:
            "Yes! Edvantae is available on web and mobile platforms, allowing you to access your academic tools and resources anywhere, anytime.",
        },
        {
            question: "How do study squads work?",
            answer:
            "Study squads allow you to create or join groups with classmates, share resources, discuss topics, and collaborate on projects. You can set group goals, assign tasks, and track progress together.",
        },
        {
            question: "Is my data secure with Edvantae?",
            answer:
            "Absolutely. We take data privacy and security seriously. All your personal information and academic data are encrypted and protected according to the highest industry standards.",
        },
        ];

        return (
        <PageTransition>
            {/* Hero Section */}
            <Hero
            title="Empowering Students for Academic Success"
            subtitle="Edvantae helps tertiary students manage time effectively, collaborate with peers, and access academic resources - all in one platform."
            ctaText="Get Started"
            ctaLink="/contact"
            secondaryCtaText="Learn More"
            secondaryCtaLink="/about"
            backgroundImage=""
            imageUrl="https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />

            {/* Features Section */}
            <section className={featureStyles.featuresSection}>
                {/* Visual cooling layers */}
                <div className={featureStyles.mathGrid} />
                <div className={featureStyles.ambientGlow} />

                <div className={featureStyles.container}>
                    
                    {/* Left-Aligned Premium Header Block */}
                    <div className={featureStyles.headerText}>
                    <span className={featureStyles.category}>Benefits</span>
                    <h2 className={featureStyles.title}>Designed for Student Success</h2>
                    <p className={featureStyles.subtitle}>
                        Edvantae combines essential tools that address the unique challenges faced by tertiary students.
                    </p>
                    </div>

                    {/* Asymmetrical Feature Grid */}
                    <div className={featureStyles.grid}>
                    {features.map((feature, index) => (
                        <FeatureCard
                        key={index}
                        index={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        delay={index * 100}
                        />
                    ))}
                    </div>
                    
                </div>
            </section>

            {/* NEW Pricing Section */}
            <section className={pricingStyles.pricingSection}>
                {/* Fluid Background Patterns */}
                <div className={pricingStyles.mathGrid} />
                <div className={pricingStyles.ambientGlow} />

                <div className={pricingStyles.container}>
                    <div className={pricingStyles.header}>
                    <h2 className={pricingStyles.title}>Simple, Transparent Pricing</h2>
                    <p className={pricingStyles.subtitle}>
                        Choose the plan that suits your academic needs, with affordable options for every student.
                    </p>
                    </div>

                    <div className={pricingStyles.grid}>
                    <PricingTier
                        name="Basic"
                        price="Free"
                        period="forever"
                        description="Essential features for individual students"
                        features={[
                        "Academic calendar",
                        "Basic task management",
                        "Access to study guides",
                        "Email support",
                        ]}
                        ctaText="Get Started"
                        ctaLink="/contact"
                        bgImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600"
                    />

                    <PricingTier
                        name="Pro"
                        price="₦00.00"
                        period="year"
                        description="Everything in Basic plus premium features"
                        features={[
                        "Advanced task prioritization",
                        "Study group collaboration",
                        "AI study assistant",
                        "Gamification rewards",
                        "Priority support",
                        ]}
                        isPopular={true}
                        ctaText="Try Pro"
                        ctaLink="/contact"
                        bgImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600"
                    />

                    <PricingTier
                        name="Campus"
                        price="Custom"
                        period="year"
                        description="Enterprise solution for institutions"
                        features={[
                        "Everything in Pro",
                        "Campus-wide deployment",
                        "Admin dashboard",
                        "API integration",
                        "Dedicated support",
                        ]}
                        ctaText="Contact Us"
                        ctaLink="/contact"
                        bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600"
                    />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={statsStyles.statsSection}>
                <div className={statsStyles.container}>
                    <div className={statsStyles.grid}>
                    
                    {/* Card 1: Nigerian Students (Counts 0 to 2.1 with 1 decimal) */}
                    <div className={statsStyles.statCard}>
                        <CountUp end={2.1} decimals={1} suffix="M+" />
                        <p className={statsStyles.label}>Nigerian Students</p>
                    </div>

                    {/* Card 2: Mobile Adoption (Counts 0 to 47) */}
                    <div className={statsStyles.statCard}>
                        <CountUp end={47} suffix="%" />
                        <p className={statsStyles.label}>Mobile Adoption</p>
                    </div>

                    {/* Card 3: Static Value */}
                    <div className={statsStyles.statCard}>
                        <div className={statsStyles.number}>₦00.00</div>
                        <p className={statsStyles.label}>Per Year</p>
                    </div>
                    
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-edvantae-blue mb-4">
                    What Students Say
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Hear from students who have transformed their academic
                    experience with Edvantae.
                </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                <div className="bgwhite p-8 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-edvantae-light-blue rounded-full flex items-center justify-center text-edvantae-blue">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h4 className="font-semibold">Chioma Okafor</h4>
                        <p className="text-sm text-gray-500">
                        Computer Science Student
                        </p>
                    </div>
                    </div>
                    <p className="text-gray-600">
                    &quot;Edvantae has completely changed how I manage my
                    academic life. The reminder system ensures I never miss
                    deadlines, and the study squads feature has made group
                    projects so much easier!&quot;
                    </p>
                </div>

                <div className="bgwhite p-8 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-edvantae-light-blue rounded-full flex items-center justify-center text-edvantae-blue">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h4 className="font-semibold">Emmanuel Adebayo</h4>
                        <p className="text-sm text-gray-500">
                        Mechanical Engineering Student
                        </p>
                    </div>
                    </div>
                    <p className="text-gray-600">
                    &quot;As a course rep, Edvantae has made communicating with
                    my classmates seamless. The academic calendar keeps everyone
                    on the same page, and the gamification makes studying more
                    fun!&quot;
                    </p>
                </div>

                <div className="bgwhite p-8 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-edvantae-light-blue rounded-full flex items-center justify-center text-edvantae-blue">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h4 className="font-semibold">Amina Ibrahim</h4>
                        <p className="text-sm text-gray-500">
                        Business Administration Student
                        </p>
                    </div>
                    </div>
                    <p className="text-gray-600">
                    &quot;The AI study support is a game-changer for difficult
                    concepts. I&apos;ve seen my grades improve since using
                    Edvantae, and the affordable price makes it accessible to all
                    students.&quot;
                    </p>
                </div>
                </div>
            </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-edvantae-blue mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Get answers to common questions about Edvantae and how it can
                    help you succeed academically.
                </p>
                </div>

                <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    />
                ))}

                <div className="text-center mt-12">
                    <Link
                    href="/blog"
                    className="text-edvantae-blue hover:text-blue-700 font-semibold"
                    >
                    View more FAQs in our blog →
                    </Link>
                </div>
                </div>
            </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-edvantae-blue mb-6">
                    Ready to Transform Your Academic Experience?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                    Join thousands of students already using Edvantae to enhance
                    their productivity, collaboration, and academic success.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                    href="/contact"
                    className="px-8 py-3 bg-edvantae-blue text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                    Get Started Now
                    </Link>
                    <Link
                    href="/about"
                    className="px-8 py-3 bgwhite border border-edvantae-blue text-edvantae-blue rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                    Learn More
                    </Link>
                </div>
                </div>
            </div>
            </section>
        </PageTransition>
        );
    }
}
