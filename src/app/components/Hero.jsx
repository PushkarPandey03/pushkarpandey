"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const ROLES = [
  "Full-Stack Java Developer",
  "Spring Boot Architect",
  "Angular & React Engineer",
  "REST API Specialist",
  "Cloud & DevOps Enthusiast",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseTime = 2000;

  const tick = useCallback(() => {
    const fullText = ROLES[roleIdx];
    if (!deleting) {
      setText(fullText.substring(0, text.length + 1));
      if (text.length + 1 === fullText.length) {
        setTimeout(() => setDeleting(true), pauseTime);
        return;
      }
    } else {
      setText(fullText.substring(0, text.length - 1));
      if (text.length - 1 === 0) {
        setDeleting(false);
        setRoleIdx((prev) => (prev + 1) % ROLES.length);
        return;
      }
    }
  }, [text, deleting, roleIdx]);

  useEffect(() => {
    const timer = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [tick, deleting]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgOrbs}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      {/* Floating code snippets */}
      <div className={styles.floatingCode}>
        <motion.div
          className={styles.codeBlock}
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "15%", left: "5%" }}
        >
          <span className={styles.codeKeyword}>@RestController</span>
        </motion.div>
        <motion.div
          className={styles.codeBlock}
          animate={{ y: [0, 12, 0], rotate: [0, -1.5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ top: "25%", right: "8%" }}
        >
          <span className={styles.codeString}>&quot;Hello, World!&quot;</span>
        </motion.div>
        <motion.div
          className={styles.codeBlock}
          animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ bottom: "30%", left: "10%" }}
        >
          <span className={styles.codeComment}>{"// building the future"}</span>
        </motion.div>
        <motion.div
          className={styles.codeBlock}
          animate={{ y: [0, 18, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ bottom: "20%", right: "5%" }}
        >
          <span className={styles.codeFn}>{"<Component />"}</span>
        </motion.div>
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.wave}>👋</span> Hey there, I&apos;m
        </motion.div>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Pushkar Pandey
        </motion.h1>

        <motion.div
          className={styles.roleWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className={styles.iAm}>I&apos;m a </span>
          <span className={styles.role}>{text}</span>
          <span className={styles.cursor}>|</span>
        </motion.div>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          I craft robust, scalable applications from database to pixel. Specializing
          in Spring Boot microservices and modern JavaScript frameworks to deliver
          seamless digital experiences.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className={styles.btnPrimary} onClick={() => scrollTo("projects")}>
            Explore My Work
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className={styles.btnSecondary} onClick={() => scrollTo("contact")}>
            Get in Touch
          </button>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className={styles.stat}>
            <span className={styles.statNum}>2+</span>
            <span className={styles.statLabel}>Years Exp.</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>7+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>10+</span>
            <span className={styles.statLabel}>Technologies</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollText}>Scroll Down</span>
      </motion.div>
    </section>
  );
}
