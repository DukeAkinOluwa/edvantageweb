import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-edvantae-blue/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Updated to lg:grid-cols-5 to evenly fit 5 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-display font-bold text-edvantae-blue inline-block mb-2"
            >
              Edvantae OneCampus
            </Link>
            <p className="text-edvantae-dark-gray max-w-xs">
              Simplifying the academic journey for tertiary students with an
              engaging and efficient platform.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/edvantae_one_campus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/edvantaelimited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/leadership"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  Our Leadership Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Features */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#features"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  Time Management
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  Collaboration
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  Gamification
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  Academic Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  AI Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies (NEW) */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {/* <li>
                <Link
                  href="/terms"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  Terms of Service
                </Link>
              </li> */}
              <li>
                <Link
                  href="/privacyPolicy"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 5: Contact Us */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-edvantae-blue" />
                <a
                  href="mailto:hello@edvantae.com"
                  className="text-edvantae-dark-gray hover:text-edvantae-blue transition-colors"
                >
                  hello@edvantae.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>

        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <Link href="/dashboard" className="text-sm text-edvantae-dark-gray">
            &copy; {currentYear} Edvantae Limited. All rights reserved.
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;