import { ReactNode } from "react";
import styles from "@/styles/components/featureCard.module.scss";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  const animationStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      className={styles.card} 
      style={animationStyle}
    >
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default FeatureCard;