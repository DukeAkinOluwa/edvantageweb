import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import styles from "@/styles/components/pricingTier.module.scss";

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  bgImage: string; // The URL for the magnificent blended background photo
}

const PricingTier = ({
  name,
  price,
  period,
  description,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
  bgImage,
}: PricingTierProps) => {
  return (
    <div className={`${styles.card} ${isPopular ? styles.popular : styles.standard}`}>
      
      {/* Spectacular Blended Image Watermark */}
      <div className={styles.bgImageContainer}>
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.bgImage}
          aria-hidden="true"
        />
      </div>

      {isPopular && (
        <div className={styles.popularBadge}>
          Most Popular
        </div>
      )}
      
      <h3 className={styles.title}>
        {name}
      </h3>
      
      <div className={styles.priceWrapper}>
        <span className={styles.price}>
          {price}
        </span>
        <span className={styles.period}>
          /{period}
        </span>
      </div>
      
      <p className={styles.description}>
        {description}
      </p>
      
      <div className={styles.featuresList}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureRow}>
            <div className={styles.checkIconWrapper}>
              <Check 
                size={14} 
                className={isPopular ? 'text-white' : 'text-edvantae-blue'} 
              />
            </div>
            <span className={styles.featureText}>
              {feature}
            </span>
          </div>
        ))}
      </div>
      
      <Button 
        className={`${styles.ctaButton} ${
          isPopular 
            ? 'bg-white hover:bg-gray-100 text-edvantae-blue' 
            : 'bg-edvantae-blue hover:bg-edvantae-dark-blue text-white'
        }`}
        asChild
      >
        <a href={ctaLink}>{ctaText}</a>
      </Button>
    </div>
  );
};

export default PricingTier;