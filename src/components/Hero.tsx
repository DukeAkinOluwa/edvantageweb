import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/hero.module.scss";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;       // Made optional with "?"
  ctaLink?: string;       // Made optional with "?"
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageUrl?: string;
  backgroundImage?: string; // Optional to prevent compile issues
}

const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageUrl,
}: HeroProps) => {
  const hasButtons = (ctaText && ctaLink) || (secondaryCtaText && secondaryCtaLink);

  return (
    <section className={styles.heroSection}>
      {/* Newly Introduced Clean Background Layers */}
      <div className={styles.mathGrid} />
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Column (Content) */}
          <div className={`${styles.contentCol} ${styles.animateSlideLeft}`}>
            <span className={styles.badge}>
              Student Productivity Platform
            </span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            
            {hasButtons && (
              <div className={styles.buttonGroup}>
                {ctaText && ctaLink && (
                  <Link href={ctaLink} className={styles.btnPrimary}>
                    {ctaText}
                    <ArrowRight size={18} className={styles.btnIcon} />
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaLink && (
                  <Link href={secondaryCtaLink} className={styles.btnSecondary}>
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Right Column (Media) */}
          <div className={`${styles.imageCol} ${styles.animateSlideRight}`}>
            {imageUrl ? (
              <Image
                width={400}
                height={400}
                src={imageUrl}
                alt="Edvantae App"
                className={styles.heroImage}
              />
            ) : (
              <div className={styles.fallbackBg}>
                Edvantae
              </div>
            )}
            <div className={`${styles.glowDot} ${styles.glowLeft}`}></div>
            <div className={`${styles.glowDot} ${styles.glowRight}`}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;