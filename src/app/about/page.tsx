'use client'

import { AspectRatio } from "@/components/ui/aspect-ratio";
import PageTransition from "@/components/PageTransition";
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { ArrowRight, Rocket, Users, Lightbulb, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Layouts
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
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
        return (
            <PageTransition>
              <div className="container mx-auto py-16 px-4">
              <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-edvantage-light-blue/20 to-white rounded-3xl p-8 md:p-12 mb-16 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-edvantage-blue">
                        About <span className="text-edvantage-dark-blue">Edvantage</span>
                      </h1>
                      <p className="text-lg leading-relaxed text-gray-700">
                        Edvantage simplifies the academic journey for tertiary students by providing an engaging and efficient 
                        platform that integrates time management, collaboration, and academic tools. The app is built to help 
                        students overcome challenges such as poor time management, disjointed academic planning, and a lack 
                        of centralized collaboration tools.
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <AspectRatio ratio={16/9}>
                          <Image 
                            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                            alt="Student using Edvantage app" 
                            className="object-cover w-full h-full"
                            width={1000}
                            height={1000}
                          />
                        </AspectRatio>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-16">
                  <section className="bg-white rounded-2xl shadow-md overflow-hidden p-8 md:p-10">
                    <h2 className="text-3xl font-bold mb-8 text-center text-edvantage-blue">Our Mission</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300 border border-edvantage-light-blue">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-edvantage-light-blue flex items-center justify-center">
                          <Target className="h-8 w-8 text-edvantage-blue" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-center text-edvantage-dark-blue">Enhance Productivity</h3>
                        <p className="text-gray-700 text-center">Help students master time management and stay focused on their academic goals.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300 border border-edvantage-light-blue">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-edvantage-light-blue flex items-center justify-center">
                          <Lightbulb className="h-8 w-8 text-edvantage-blue" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-center text-edvantage-dark-blue">Support Achievement</h3>
                        <p className="text-gray-700 text-center">Provide integrated tools for scheduling, task management, and timely reminders.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300 border border-edvantage-light-blue">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-edvantage-light-blue flex items-center justify-center">
                          <Users className="h-8 w-8 text-edvantage-blue" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-center text-edvantage-dark-blue">Foster Collaboration</h3>
                        <p className="text-gray-700 text-center">Enable real-time sharing of study materials, schedules, and academic resources.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300 border border-edvantage-light-blue">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-edvantage-light-blue flex items-center justify-center">
                          <Rocket className="h-8 w-8 text-edvantage-blue" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-center text-edvantage-dark-blue">Drive Motivation</h3>
                        <p className="text-gray-700 text-center">Incorporate gamification features to track progress and reward academic achievements.</p>
                      </div>
                    </div>
                  </section>
                  
                  <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-edvantage-blue">Our Purpose</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                          Edvantage simplifies the academic journey for tertiary students by providing an engaging and efficient 
                          platform that integrates time management, collaboration, and academic tools.
                        </p>
                        <div className="mt-4 space-y-3">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 bg-edvantage-light-blue rounded-full flex items-center justify-center mt-1">
                              <span className="text-edvantage-blue text-sm">1</span>
                            </div>
                            <p className="ml-3 text-gray-700">Overcoming poor time management through structured scheduling</p>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 bg-edvantage-light-blue rounded-full flex items-center justify-center mt-1">
                              <span className="text-edvantage-blue text-sm">2</span>
                            </div>
                            <p className="ml-3 text-gray-700">Replacing disjointed academic planning with centralized tools</p>
                          </div>
                          <div className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 bg-edvantage-light-blue rounded-full flex items-center justify-center mt-1">
                              <span className="text-edvantage-blue text-sm">3</span>
                            </div>
                            <p className="ml-3 text-gray-700">Creating a hub for student collaboration and resource sharing</p>
                          </div>
                        </div>
                        <Link href="/contact" className="inline-flex items-center text-edvantage-blue font-medium mt-6 hover:underline">
                          Learn how we can help you
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                      <div className="bg-edvantage-light-blue/30 max-h-96 overflow-hidden">
                        <Image 
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                          alt="Educational technology" 
                          className="object-cover w-full h-full"
                          width={1000}
                          height={1000}
                        />
                      </div>
                    </div>
                  </section>
                  
                  <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="bg-edvantage-light-blue/30 max-h-96 overflow-hidden order-2 md:order-1">
                        <Image 
                          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                          alt="Student studying" 
                          className="object-cover w-full h-full"
                            width={1000}
                            height={1000}
                        />
                      </div>
                      <div className="p-8 order-1 md:order-2">
                        <h2 className="text-2xl font-semibold mb-4 text-edvantage-blue">Our Brand Story</h2>
                        <p className="text-lg leading-relaxed text-gray-700 mb-4">
                          Edvantage was born out of a student&apos;s struggle to juggle assignments, deadlines, and personal life. 
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700 mb-4">
                          Recognizing the need for a centralized academic productivity platform, the idea of Edvantage was 
                          developed to help students manage their studies effectively, collaborate with peers, and stay 
                          motivated to achieve academic excellence.
                        </p>
                        <div className="bg-edvantage-light-blue/20 p-4 rounded-lg italic text-gray-700 border-l-4 border-edvantage-blue">
                          &quot;We created Edvantage because we believe every student deserves tools that work as hard as they do.&quot;
                        </div>
                        <Link href="/leadership" className="inline-flex items-center text-edvantage-blue font-medium mt-6 hover:underline">
                          Meet our Leadership Team
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </section>
                  
                  <section className="bg-gray-50 p-10 rounded-3xl shadow-inner">
                    <h2 className="text-2xl font-semibold mb-8 text-center text-edvantage-blue">Our Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-edvantage-light-blue flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-edvantage-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-center text-edvantage-blue">Efficiency</h3>
                        <p className="text-gray-700 text-center">Saves students time by streamlining academic processes.</p>
                      </div>
                      <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-edvantage-light-blue flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-edvantage-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-center text-edvantage-blue">Community</h3>
                        <p className="text-gray-700 text-center">Encourages peer collaboration and academic support.</p>
                      </div>
                      <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-edvantage-light-blue flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-edvantage-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-center text-edvantage-blue">Integrity</h3>
                        <p className="text-gray-700 text-center">Ensures transparent communication and ethical practices.</p>
                      </div>
                      <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-edvantage-light-blue flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-edvantage-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-center text-edvantage-blue">Reliability</h3>
                        <p className="text-gray-700 text-center">Provides accurate, up-to-date academic information.</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              </div>
            </PageTransition>
        );
    }
}