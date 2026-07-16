import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "@/styles/components/navbar.module.scss"; 
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  
  // Store the previous scroll position in a ref to compare against
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 1. Lock/Unlock background scroll when the mobile menu opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 2. Handle scroll logic (only if the mobile menu is closed)
  useEffect(() => {
    const handleScroll = () => {
      // If the mobile menu is open, we freeze scroll detection to prevent moving
      if (isOpen) return;

      const currentScrollY = window.scrollY;

      // Determine if the background should be styled (scrolled past 20px)
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling Down & past the header height -> Hide
        setVisible(false);
      } else {
        // Scrolling Up -> Show
        setVisible(true);
      }

      // Update the ref to the current position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]); // Added isOpen dependency so the scroll handler updates when menu state changes

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, []);

  // Compute the header classes based on scrolling behavior
  // Note: if isOpen is true, we force it to remain visible!
  const headerClass = `
    ${styles.header} 
    ${scrolled ? styles.scrolled : ""} 
    ${!visible && !isOpen ? styles.hidden : ""}
  `.trim();
  
  const navClass = `
    ${styles.nav} 
    ${scrolled ? styles.scrolled : ""}
  `.trim();

  return (
    <header className={headerClass}>
      <nav className={navClass}>
        <Link href="/" className={styles.logo}>
          <Image
            width={400}
            height={400}
            src={"/Images/edvantaenavbarlogo.jpg"}
            alt="Edvantae App"
            className={styles.navLogo}
          />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/leadership" className={styles.navLink}>
            Leadership
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
          <Link href="#" className={styles.btnPrimary}>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.mobileContainer}>
          {/* Explicit Close Button */}
          <button 
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} className="text-edvantae-dark-gray" />
          </button>
          
          <Link href="/" className={styles.mobileLink}>
            Home
          </Link>
          <Link href="/about" className={styles.mobileLink}>
            About
          </Link>
          <Link href="/leadership" className={styles.mobileLink}>
            Leadership
          </Link>
          <Link href="/blog" className={styles.mobileLink}>
            Blog
          </Link>
          <Link href="/contact" className={styles.mobileLink}>
            Contact
          </Link>
          <Link href="#" className={`${styles.btnPrimary} ${styles.mobileBtn}`}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;