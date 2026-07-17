import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import story from "@/styles/components/aboutPage/story.module.scss";

export default function BrandStorySection() {
  return (
    <section className={story.splitSection}>
      {/* Internal bounding container handling max-width centering and rounded layout corners */}
      <div className={story.sectionContainer}>
        <div className={story.splitGrid}>
          
          {/* Media Column (Positioned Left on Desktop) */}
          <div className={`${story.splitMediaCol} ${story.orderMediaMobile}`}>
            <Image 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Student collaborating digitally" 
              className={story.splitImage}
              width={1000}
              height={1000}
            />
            {/* Geometric Cutout Overlay */}
            <div className={story.geometricCutout} />
          </div>
          
          {/* Content Column (Positioned Right on Desktop) */}
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
            
            {/* Upgraded Premium Blockquote */}
            <blockquote className={story.blockquote}>
              <div className={story.quoteIconWrapper}>
                <Quote size={16} fill="currentColor" />
              </div>
              <p>
                &quot;We created Edvantae because we believe every student deserves tools that work as hard as they do.&quot;
              </p>
            </blockquote>

            <Link href="/leadership" className={story.arrowLink}>
              <span>Meet our Leadership Team</span>
              <ArrowRight size={16} className={story.arrowIcon} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}