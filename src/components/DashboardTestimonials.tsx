import React from "react";
import { User } from "lucide-react";
import styles from "@/styles/components/testimonials.module.scss";

interface Testimonial {
id: number;
name: string;
role: string;
quote: string;
}

const testimonialsData: Testimonial[] = [
// Row 1 Testimonials (7 Items)
{
    id: 1,
    name: "Chioma Okafor",
    role: "Computer Science Student",
    quote: "Edvantae has completely changed how I manage my academic life. The reminder system ensures I never miss deadlines, and the study squads are fantastic!"
},
{
    id: 2,
    name: "Emmanuel Adebayo",
    role: "Mechanical Engineering Student",
    quote: "As a course rep, Edvantae has made communicating with my classmates seamless. The shared schedules keep everyone perfectly aligned!"
},
{
    id: 3,
    name: "Amina Ibrahim",
    role: "Business Administration Student",
    quote: "The AI study support is a game-changer for difficult concepts. I've seen my understanding improve immediately, and the design is super intuitive."
},
{
    id: 4,
    name: "Chinedu Okafor",
    role: "Electrical Engineering Student",
    quote: "I love the clean interface. Keeping track of lab reports alongside my study group tasks has never felt this effortless."
},
{
    id: 5,
    name: "Funmi Alao",
    role: "Medicine & Surgery Student",
    quote: "Managing my clinical postings and lecture notes was chaotic until I started using Edvantae. It's an absolute lifesaver!"
},
{
    id: 6,
    name: "Tunde Bakare",
    role: "Architecture Student",
    quote: "Working on design juries requires strict timelines. The project tracking and calendar blocks here are built perfectly for tertiary students."
},
{
    id: 7,
    name: "Eseosa Igbinosa",
    role: "Law Student",
    quote: "Reading lists can get overwhelming. Having a central space to map out my study schedules and collaborate on mock trials is brilliant."
},

// Row 2 Testimonials (7 Items)
{
    id: 8,
    name: "Yusuf Yusuf",
    role: "Civil Engineering Student",
    quote: "The squad system makes tracking group project milestones easy. No more endless WhatsApp messages trying to organize slides."
},
{
    id: 9,
    name: "Blessing Nwachukwu",
    role: "Biochemistry Student",
    quote: "I use the flashcard features and AI summaries to prep before exams. The gamification aspects keep me highly motivated!"
},
{
    id: 10,
    name: "Zainab Bello",
    role: "Economics Student",
    quote: "The notification integration is wonderful. I get alerts for test prep right on time, keeping me consistent through difficult semesters."
},
{
    id: 11,
    name: "David Oyelowo",
    role: "Mechatronics Engineering Student",
    quote: "The balance between robust task management and simple collaboration utilities is fantastic. Ideal for complex engineering workflows."
},
{
    id: 12,
    name: "Halima Abubakar",
    role: "Pharmacy Student",
    quote: "We use the shared resource lockers in our squad to share assignment references. It makes learning very decentralized and fun!"
},
{
    id: 13,
    name: "Tobi Adebisi",
    role: "Accounting Student",
    quote: "Tax law and audit formulas are tough, but practicing with colleagues on Edvantae Study Squads makes the load much lighter."
},
{
    id: 14,
    name: "Ngozi Kemdi",
    role: "Mass Communication Student",
    quote: "Managing my radio schedules alongside courses was tough. This app gives me the structure I need to stay creative and organized."
}
];

const DashboardTestimonials = () => {
// Split into two rows to scroll in opposite directions
const rowOne = testimonialsData.slice(0, 7);
const rowTwo = testimonialsData.slice(7, 14);

// Helper to render individual cards
const renderCard = (item: Testimonial) => (
    <div key={item.id} className={styles.testimonialCard}>
    <div className={styles.userProfile}>
        <div className={styles.avatarWrapper}>
        <User size={24} />
        </div>
        <div className={styles.userDetails}>
        <h4 className={styles.userName}>{item.name}</h4>
        <p className={styles.userRole}>{item.role}</p>
        </div>
    </div>
    <p className={styles.quoteText}>&quot;{item.quote}&quot;</p>
    </div>
);

return (
    <section className={styles.testimonialsSection}>
    {/* Dynamic Background Pattern Infrastructure */}
    <div className={styles.mathGrid} />
    <div className={styles.ambientGlow} />

    <div className={styles.container}>
        <div className={styles.header}>
        <h2 className={styles.title}>What Students Say</h2>
        <p className={styles.subtitle}>
            Hear from tertiary students who have streamlined their workflow, managed their squads, and transformed their academic experience with Edvantae.
        </p>
        </div>

        <div className={styles.marqueeContainer}>
        {/* Row 1: Leftward Scrolling Track */}
        <div className={styles.marqueeRow}>
            <div className={`${styles.marqueeTrack} ${styles.scrollLeft}`}>
            {/* Render original 7 and duplicate them immediately for loop continuity */}
            {rowOne.map((item) => renderCard(item))}
            {rowOne.map((item) => renderCard({ ...item, id: item.id + 100 }))}
            </div>
        </div>

        {/* Row 2: Rightward Scrolling Track */}
        <div className={styles.marqueeRow}>
            <div className={`${styles.marqueeTrack} ${styles.scrollRight}`}>
            {/* Render original 7 and duplicate them immediately for loop continuity */}
            {rowTwo.map((item) => renderCard(item))}
            {rowTwo.map((item) => renderCard({ ...item, id: item.id + 200 }))}
            </div>
        </div>
        </div>
    </div>
    </section>
);
};

export default DashboardTestimonials;