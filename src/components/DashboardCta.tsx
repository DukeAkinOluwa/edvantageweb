import React from "react";
import Link from "next/link";
import styles from "@/styles/components/cta.module.scss";

const DashboardCTA = () => {
  return (
    <section className={styles.ctaSection}>
      {/* Background grid system and glowing radial patterns */}
      <div className={styles.mathGrid} />
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        <h2 className={styles.title}>
          Ready to Transform Your Academic Experience?
        </h2>
        
        <p className={styles.subtitle}>
          Join thousands of students already using Edvantae to enhance 
          their productivity, collaboration, and academic success.
        </p>

        <div className={styles.actionsWrapper}>
          <Link href="/contact" className={styles.primaryButton}>
            Get Started Now
          </Link>
          
          <Link href="/about" className={styles.secondaryButton}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardCTA;