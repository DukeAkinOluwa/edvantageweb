
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link
          href="/" className="text-2xl font-display font-bold text-edvantage-blue flex items-center"
        >
          <span className="mr-2">Edvantage</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className={`nav-link`}
            // className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`nav-link`}
            // className={`nav-link ${ location.pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/leadership"
            className={`nav-link`}
            // className={`nav-link ${ location.pathname === "/leadership" ? "active" : ""}`}
          >
            Leadership
          </Link>
          <Link
            href="/blog"
            className={`nav-link`}
            // className={`nav-link ${ location.pathname.includes("/blog") ? "active" : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`nav-link`}
            // className={`nav-link ${ location.pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
          <Link href="#" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-edvantage-dark-gray"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } pt-24`}
      >
        <div className="container mx-auto px-8 flex flex-col space-y-6 relative">
          {/* Explicit Close Button */}
          <button 
            className="absolute top-[-60px] right-4 p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} className="text-edvantage-dark-gray" />
          </button>
          <Link
            href="/" className="text-xl font-medium py-2 border-b border-gray-100"
          >
            Home
          </Link>
          <Link
            href="/about" className="text-xl font-medium py-2 border-b border-gray-100"
          >
            About
          </Link>
          <Link
            href="/leadership" className="text-xl font-medium py-2 border-b border-gray-100"
          >
            Leadership
          </Link>
          <Link
            href="/blog" className="text-xl font-medium py-2 border-b border-gray-100"
          >
            Blog
          </Link>
          <Link
            href="/contact" className="text-xl font-medium py-2 border-b border-gray-100"
          >
            Contact
          </Link>
          <Link href="#" className="btn-primary text-center mt-4">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
