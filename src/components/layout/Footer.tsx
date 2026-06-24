import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.column}>
          <Link href="/" className={styles.logo}>
            JAIN <span>University</span>
          </Link>
          <p className={styles.desc}>
            A globally recognized Deemed-to-be University committed to academic excellence and student success.
          </p>
          <div className={styles.contact}>
            <p>📞 +91 90000 70888</p>
            <p>✉️ info@jainuniversity.ac.in</p>
            <p>📍 Jayanagar, Bengaluru</p>
          </div>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Blog / News</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Information / Legal</h4>
          <ul className={styles.links}>
            <li><Link href="/about">Why Choose JAIN</Link></li>
            <li><Link href="/placements">Placements / Careers</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarInner}`}>
          <p>© 2026 JAIN (Deemed-to-be University), Bangalore. All Rights Reserved.</p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}