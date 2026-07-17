import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import styles from "@/styles/components/faq.module.scss";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}>
      <button 
        className={styles.trigger} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.question}>{question}</span>
        <ChevronDown size={20} className={styles.icon} />
      </button>
      
      <div 
        className={styles.contentWrapper}
        style={{ maxHeight: isOpen ? "300px" : "0px" }}
      >
        <div className={styles.content}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const DashboardFAQ = () => {
  const faqs = [
    {
      question: "What is Edvantae?",
      answer: "Edvantae is a centralized academic management and student collaboration ecosystem designed specifically for tertiary students in Nigeria to streamline task tracking, coordinate shared calendars, and run Study Squads."
    },
    {
      question: "How do Study Squads work?",
      answer: "Study Squads allow you and your classmates to create private, shared groups with central task trackers, a synchronized group calendar, and cloud resource lockers for shared academic materials."
    },
    {
      question: "Is there a mobile application?",
      answer: "Yes, our web application is entirely mobile-optimized, allowing you to easily check calendars, receive push notifications, and study on the go."
    }
  ];

  return (
    <section className={styles.faqSection}>
      {/* Background patterns tailored for the light layout */}
      <div className={styles.mathGrid} />
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        <div className={styles.headerText}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Get answers to common questions about Edvantae and how it can help you succeed academically.
          </p>
        </div>

        <div className={styles.faqWrapper}>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className={styles.footerText}>
          <Link href="/blog" className={styles.blogLink}>
            View more FAQs in our blog <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardFAQ;