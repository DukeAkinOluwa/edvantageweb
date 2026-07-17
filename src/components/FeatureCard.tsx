import { ReactNode } from "react";
import styles from "@/styles/components/featureCard.module.scss";

interface FeatureCardProps {
  icon: ReactNode; // Can accept standard SVGs, or <img> tags containing 3D illustration URLs
  title: string;
  description: string;
  delay?: number;
  index: number; // Used to compute alternating left/right layout & clean theme loops
}

const FeatureCard = ({ icon, title, description, delay = 0, index }: FeatureCardProps) => {
  const animationStyle = {
    animationDelay: `${delay}ms`,
  };

  // Even index = Left-sided icon; Odd index = Right-sided icon
  const layoutClass = index % 2 === 0 ? styles.cardLeftIcon : styles.cardRightIcon;

  return (
    <div 
      className={`${styles.card} ${layoutClass}`} 
      style={animationStyle}
    >
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;