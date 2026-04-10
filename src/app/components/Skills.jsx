"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Skills.module.css";

const SKILL_CATEGORIES = [
  {
    title: "Backend",
    icon: "⚙️",
    color: "var(--accent-cyan)",
    skills: [
      { name: "Java 17", level: 92 },
      { name: "Spring Boot", level: 90 },
      { name: "Spring Security / JWT", level: 85 },
      { name: "REST APIs", level: 93 },
      { name: "MySQL", level: 88 },
      { name: "JPA / Hibernate", level: 85 },
      { name: "WebSocket (STOMP)", level: 78 },
      { name: "Maven", level: 82 },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    color: "var(--accent-emerald)",
    skills: [
      { name: "Angular 16+", level: 88 },
      { name: "React / Next.js", level: 82 },
      { name: "TypeScript", level: 84 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap 5", level: 85 },
      { name: "Material UI", level: 78 },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: "☁️",
    color: "var(--accent-purple)",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "AWS (S3, Rekognition)", level: 75 },
      { name: "Firebase", level: 77 },
      { name: "Google Cloud", level: 70 },
      { name: "Capacitor (Mobile)", level: 76 },
      { name: "Postman", level: 90 },
      { name: "VS Code / IntelliJ", level: 92 },
      { name: "Apache POI", level: 80 },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tech stack I work with
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          From designing robust backend architectures to building responsive,
          dynamic user interfaces, these are the tools I use daily.
        </motion.p>

        <div className={styles.categories}>
          {SKILL_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className={styles.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + ci * 0.15 }}
            >
              <div className={styles.catHeader}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3 className={styles.catTitle}>{cat.title}</h3>
              </div>
              <div className={styles.skillsList}>
                {cat.skills.map((skill, si) => (
                  <div key={skill.name} className={styles.skill}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <motion.div
                        className={styles.barFill}
                        style={{ background: cat.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.4 + ci * 0.15 + si * 0.06,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
