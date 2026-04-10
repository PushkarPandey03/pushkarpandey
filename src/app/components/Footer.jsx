"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo}>
              <span className={styles.logoSymbol}>&lt;</span>
              <span className={styles.logoText}>PP</span>
              <span className={styles.logoSymbol}>/&gt;</span>
            </a>
            <p className={styles.tagline}>
              Building robust applications from backend to frontend.
            </p>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <a href="#about" className={styles.footerLink}>About</a>
            <a href="#skills" className={styles.footerLink}>Skills</a>
            <a href="#projects" className={styles.footerLink}>Projects</a>
            <a href="#experience" className={styles.footerLink}>Experience</a>
            <a href="#contact" className={styles.footerLink}>Contact</a>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Contact</h4>
            <a href="mailto:pandeypushkar333@gmail.com" className={styles.footerLink}>
              pandeypushkar333@gmail.com
            </a>
            <a href="tel:9511237284" className={styles.footerLink}>
              9511237284
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} Pushkar Pandey. Crafted with care and a lot of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
