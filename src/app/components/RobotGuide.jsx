"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./RobotGuide.module.css";

const SECTION_MESSAGES = {
  hero: { text: "Welcome! I'm Pushkar's code buddy. Scroll down to explore! 🚀", emotion: "happy" },
  about: { text: "Here's where you learn about Pushkar's coding journey! 📖", emotion: "curious" },
  skills: { text: "Check out this impressive tech stack! Java, Spring Boot, Angular... 💪", emotion: "excited" },
  projects: { text: "Real projects built from scratch! Each one tells a story. 🛠️", emotion: "proud" },
  experience: { text: "Two years of building real-world applications! 📈", emotion: "thinking" },
  contact: { text: "Want to work together? Drop a message! I'll make sure Pushkar sees it. 📬", emotion: "waving" },
};

export default function RobotGuide() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [visible, setVisible] = useState(true);
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "contact"];

    const onScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 200);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 300) {
          if (sections[i] !== currentSection) {
            setCurrentSection(sections[i]);
            setBubbleVisible(true);
            setTimeout(() => setBubbleVisible(false), 5000);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const initialTimeout = setTimeout(() => setBubbleVisible(false), 6000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(initialTimeout);
    };
  }, [currentSection]);

  if (isMobile) return null;

  const msg = SECTION_MESSAGES[currentSection] || SECTION_MESSAGES.hero;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.robotContainer}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Speech bubble */}
          <AnimatePresence>
            {bubbleVisible && (
              <motion.div
                className={styles.speechBubble}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.3 }}
                key={currentSection}
              >
                <p className={styles.speechText}>{msg.text}</p>
                <div className={styles.speechArrow} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Robot character */}
          <motion.div
            className={styles.robot}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            onMouseEnter={() => setBubbleVisible(true)}
            onMouseLeave={() => setTimeout(() => setBubbleVisible(false), 3000)}
          >
            {/* Robot SVG body */}
            <svg
              viewBox="0 0 120 160"
              className={styles.robotSvg}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Antenna */}
              <line x1="60" y1="8" x2="60" y2="24" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
              <circle cx="60" cy="6" r="5" fill="#22d3ee" className={styles.antennaBall}>
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Head */}
              <rect x="28" y="24" width="64" height="48" rx="12" fill="#1a1a2e" stroke="#22d3ee" strokeWidth="2" />

              {/* Glasses */}
              <rect x="34" y="36" width="20" height="14" rx="4" fill="#0a0a0f" stroke="#a78bfa" strokeWidth="1.5" />
              <rect x="66" y="36" width="20" height="14" rx="4" fill="#0a0a0f" stroke="#a78bfa" strokeWidth="1.5" />
              <line x1="54" y1="43" x2="66" y2="43" stroke="#a78bfa" strokeWidth="1.5" />

              {/* Eyes */}
              <circle cx="44" cy="43" r="3" fill="#22d3ee">
                <animate attributeName="r" values="3;2;3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="76" cy="43" r="3" fill="#22d3ee">
                <animate attributeName="r" values="3;2;3" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Mouth */}
              <path d="M50 58 Q60 64 70 58" stroke="#34d399" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Hoodie body */}
              <path d="M20 76 L28 72 L92 72 L100 76 L100 130 Q100 140 90 140 L30 140 Q20 140 20 130 Z" fill="#1a1a2e" stroke="#22d3ee" strokeWidth="1.5" />

              {/* Hoodie hood */}
              <path d="M28 72 Q60 62 92 72" stroke="#22d3ee" strokeWidth="1.5" fill="none" />

              {/* Code symbol on hoodie */}
              <text x="60" y="112" textAnchor="middle" fontSize="18" fill="#22d3ee" fontFamily="monospace" opacity="0.8">&lt;/&gt;</text>

              {/* Arms */}
              <path d="M20 82 L6 100 L10 116" stroke="#1a1a2e" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 82 L6 100 L10 116" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M100 82 L114 100 L110 116" stroke="#1a1a2e" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M100 82 L114 100 L110 116" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

              {/* Laptop in hands */}
              <rect x="8" y="114" width="104" height="8" rx="2" fill="#12121a" stroke="#34d399" strokeWidth="1" />
              <rect x="24" y="106" width="72" height="8" rx="1" fill="#0a0a0f" stroke="#34d399" strokeWidth="0.5" />
              {/* Screen glow */}
              <rect x="28" y="107" width="64" height="5" rx="1" fill="#22d3ee" opacity="0.15" />

              {/* Legs */}
              <rect x="36" y="140" width="16" height="16" rx="4" fill="#1a1a2e" stroke="#22d3ee" strokeWidth="1" />
              <rect x="68" y="140" width="16" height="16" rx="4" fill="#1a1a2e" stroke="#22d3ee" strokeWidth="1" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
