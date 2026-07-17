import React, { useState, useEffect, useRef } from "react";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";
import mission from "@/styles/components/aboutPage/mission.module.scss";

const MISSION_ITEMS = [
  {
    id: "productivity",
    title: "Enhance Productivity",
    icon: Target,
    text: "Help students master time management and stay focused on their academic goals."
  },
  {
    id: "achievement",
    title: "Support Achievement",
    icon: Lightbulb,
    text: "Provide integrated tools for scheduling, task management, and timely reminders."
  },
  {
    id: "collaboration",
    title: "Foster Collaboration",
    icon: Users,
    text: "Enable real-time sharing of study materials, schedules, and academic resources."
  },
  {
    id: "motivation",
    title: "Drive Motivation",
    icon: Rocket,
    text: "Incorporate gamification features to track progress and reward academic achievements."
  }
];

const AUTOPLAY_DURATION = 5000; // 5 seconds per slide

export default function MissionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const startRotation = () => {
    stopRotation();
    const startTime = Date.now();
    
    // Smooth millisecond tick tracker for the slider metrics
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
      setProgress(percentage);
    }, 30);

    // Active slide structural index updating callback
    timerRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % MISSION_ITEMS.length);
    }, AUTOPLAY_DURATION);
  };

  const stopRotation = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, [activeIndex]);

  const handleIndicatorClick = (index: number) => {
    setProgress(0);
    setActiveIndex(index);
  };

  return (
    <section className={mission.cardSection}>
      {/* Central bounds wrapper restricting width on ultra-wide screens */}
      <div className={mission.sectionContainer}>
        <h2 className={mission.sectionTitle}>Our Mission</h2>
        
        <div className={mission.interactiveContainer}>
          
          {/* Main Context Dynamic Loop */}
          {MISSION_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = index === activeIndex;

            return (
              <div key={item.id} className={mission.missionNode}>
                
                {/* Text Title Trigger Button Row */}
                <button
                  className={`${mission.indicatorBtn} ${isActive ? mission.activeIndicator : ""}`}
                  onClick={() => handleIndicatorClick(index)}
                  aria-label={`Show ${item.title}`}
                >
                  <span className={mission.indicatorLabel}>{item.title}</span>
                  <div className={mission.progressBarBg}>
                    <div 
                      className={mission.progressBarFill} 
                      style={{ width: isActive ? `${progress}%` : "0%" }}
                    />
                  </div>
                </button>

                {/* Mobile View Inline Dropdown Card (Renders inline only on screens < 768px) */}
                <div className={`${mission.inlineDisplayBox} ${isActive ? mission.boxOpen : mission.boxClosed}`}>
                  <div className={mission.cardInner}>
                    <div className={mission.iconCircle}>
                      <IconComponent className={mission.icon} />
                    </div>
                    <h3 className={mission.cardHeading}>{item.title}</h3>
                    <p className={mission.cardText}>{item.text}</p>
                  </div>
                </div>

              </div>
            );
          })}

          {/* Desktop Shared Absolute Preview Box Window (768px+ layout) */}
          <div className={mission.desktopDisplayWindow}>
            {MISSION_ITEMS.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = index === activeIndex;
              
              return (
                <div 
                  key={`desktop-${item.id}`} 
                  className={`${mission.desktopSlide} ${isActive ? mission.slideVisible : mission.slideHidden}`}
                >
                  <div className={mission.iconCircle}>
                    <IconComponent className={mission.icon} />
                  </div>
                  <h3 className={mission.cardHeading}>{item.title}</h3>
                  <p className={mission.cardText}>{item.text}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}