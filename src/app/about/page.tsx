'use client'

import { AspectRatio } from "@/components/ui/aspect-ratio";
import PageTransition from "@/components/PageTransition";
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Target, Lightbulb, Users, Rocket, ArrowRight, Zap, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Layouts
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from "@/components/Hero";

import layout from "@/styles/components/aboutPage/aboutPageLayout.module.scss";
import mission from "@/styles/components/aboutPage/mission.module.scss";
import purpose from "@/styles/components/aboutPage/purpose.module.scss";
import story from "@/styles/components/aboutPage/story.module.scss";
import values from "@/styles/components/aboutPage/values.module.scss";
import MissionSection from "@/components/aboutPage/missionSection";
import BrandStorySection from "@/components/aboutPage/brandStorySection";

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
              <Hero
                title="About Edvantae"
                subtitle="Edvantae simplifies the academic journey for tertiary students by providing an engaging and efficient platform that integrates time management, collaboration, and academic tools. The app is built to help students overcome challenges such as poor time management, disjointed academic planning, and a lack of centralized collaboration tools."
                ctaText=""
                ctaLink=""
                secondaryCtaText=""
                secondaryCtaLink=""
                backgroundImage=""
                imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              />
              <BrandStorySection />
              <MissionSection />
              <div className={layout.pageWrapper}>
                <div className={layout.container}>
                  <div className={layout.sectionsStack}>

                    {/* ==========================================
                        Section 2: Our Purpose
                      ========================================== */}
                    {/* <section className={purpose.splitSection}>
                      <div className={purpose.splitGrid}>
                        <div className={purpose.splitContentCol}>
                          <h2 className={purpose.splitTitle}>Our Purpose</h2>
                          <p className={purpose.purposeLeadText}>
                            Edvantae simplifies the academic journey for tertiary students by providing an engaging and efficient 
                            platform that integrates time management, collaboration, and academic tools.
                          </p>
                          
                          <div className={purpose.numberedList}>
                            <div className={purpose.listItem}>
                              <div className={purpose.listNumber}>1</div>
                              <p className={purpose.listText}>Overcoming poor time management through structured scheduling</p>
                            </div>
                            <div className={purpose.listItem}>
                              <div className={purpose.listNumber}>2</div>
                              <p className={purpose.listText}>Replacing disjointed academic planning with centralized tools</p>
                            </div>
                            <div className={purpose.listItem}>
                              <div className={purpose.listNumber}>3</div>
                              <p className={purpose.listText}>Creating a hub for student collaboration and resource sharing</p>
                            </div>
                          </div>

                          <Link href="/contact" className={purpose.arrowLink}>
                            <span>Learn how we can help you</span>
                            <ArrowRight size={16} className={purpose.arrowIcon} />
                          </Link>
                        </div>
                        
                        <div className={purpose.splitMediaCol}>
                          <Image 
                            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                            alt="Educational technology infrastructure" 
                            className={purpose.splitImage}
                            width={1000}
                            height={1000}
                            priority
                          />
                        </div>
                      </div>
                    </section> */}

                    {/* ==========================================
                        Section 3: Our Brand Story
                      ========================================== */}
                    {/* <section className={story.splitSection}>
                      <div className={story.splitGrid}>
                        <div className={`${story.splitMediaCol} ${story.orderMediaMobile}`}>
                          <Image 
                            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                            alt="Student collaborating digitally" 
                            className={story.splitImage}
                            width={1000}
                            height={1000}
                          />
                        </div>
                        
                        <div className={`${story.splitContentCol} ${story.orderContentMobile}`}>
                          <h2 className={story.splitTitle}>Our Brand Story</h2>
                          <p className={story.bodyTextText}>
                            Edvantae was born out of a student&apos;s struggle to juggle assignments, deadlines, and personal life. 
                          </p>
                          <p className={story.bodyTextText}>
                            Recognizing the need for a centralized academic productivity platform, the idea of Edvantae was 
                            developed to help students manage their studies effectively, collaborate with peers, and stay 
                            motivated to achieve academic excellence.
                          </p>
                          
                          <blockquote className={story.blockquote}>
                            &quot;We created Edvantae because we believe every student deserves tools that work as hard as they do.&quot;
                          </blockquote>

                          <Link href="/leadership" className={story.arrowLink}>
                            <span>Meet our Leadership Team</span>
                            <ArrowRight size={16} className={story.arrowIcon} />
                          </Link>
                        </div>
                      </div>
                    </section> */}

                    {/* ==========================================
                        Section 4: Our Values
                      ========================================== */}
                    <section className={values.valuesSection}>
                      <h2 className={values.sectionTitle}>Our Values</h2>
                      <div className={values.valuesGrid}>
                        
                        <div className={values.valueCard}>
                          <div className={values.iconCircle}>
                            <Zap className={values.icon} />
                          </div>
                          <h3 className={values.cardHeading}>Efficiency</h3>
                          <p className={values.cardText}>Saves students time by streamlining academic processes.</p>
                        </div>

                        <div className={values.valueCard}>
                          <div className={values.iconCircle}>
                            <Users className={values.icon} />
                          </div>
                          <h3 className={values.cardHeading}>Community</h3>
                          <p className={values.cardText}>Encourages peer collaboration and academic support.</p>
                        </div>

                        <div className={values.valueCard}>
                          <div className={values.iconCircle}>
                            <Shield className={values.icon} />
                          </div>
                          <h3 className={values.cardHeading}>Integrity</h3>
                          <p className={values.cardText}>Ensures transparent communication and ethical practices.</p>
                        </div>

                        <div className={values.valueCard}>
                          <div className={values.iconCircle}>
                            <CheckCircle className={values.icon} />
                          </div>
                          <h3 className={values.cardHeading}>Reliability</h3>
                          <p className={values.cardText}>Provides accurate, up-to-date academic information.</p>
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