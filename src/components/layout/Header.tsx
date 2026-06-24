"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.contactInfo}>
            <span className={styles.contactItem}><Phone size={14} /> +91 90000 70888</span>
            <span className={styles.contactItem}><Mail size={14} /> info@jainuniversity.ac.in</span>
          </div>
        </div>
      </div>
      <nav className={styles.mainNav}>
        <div className={`container ${styles.navInner}`}>
          <Link href="/" className={styles.logo}>
            JAIN <span>University</span>
          </Link>

          <button className={styles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About Us</Link>
            
            <div className={styles.dropdownWrapper}>
              <Link href="/programs" className={styles.navLink}>Academic Programs</Link>
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuColumn}>
                  <h4>Engineering & Tech</h4>
                  <ul>
                    <li><Link href="/programs">B.Tech CSE</Link></li>
                    <li><Link href="/programs">B.Tech AI & ML</Link></li>
                    <li><Link href="/programs">M.Tech Data Science</Link></li>
                  </ul>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Commerce & Management</h4>
                  <ul>
                    <li><Link href="/programs">BBA (Hons)</Link></li>
                    <li><Link href="/programs">B.Com</Link></li>
                    <li><Link href="/programs">MBA Executive</Link></li>
                  </ul>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Sciences</h4>
                  <ul>
                    <li><Link href="/programs">B.Sc Physics</Link></li>
                    <li><Link href="/programs">M.Sc Biotechnology</Link></li>
                    <li><Link href="/programs">Ph.D Sciences</Link></li>
                  </ul>
                </div>
                <div className={styles.megaMenuColumn}>
                  <h4>Humanities & Design</h4>
                  <ul>
                    <li><Link href="/programs">BA Psychology</Link></li>
                    <li><Link href="/programs">B.Des Fashion</Link></li>
                    <li><Link href="/programs">BA Journalism</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/admissions" className={styles.navLink}>Admissions</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
            <Link href="/contact" className={styles.navLink}>Contact Us</Link>
            
            <Link href="/admissions" className={`btn-primary ${styles.applyBtn}`}>Apply Now</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}