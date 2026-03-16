"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Experience.module.css";

const MILESTONES = [
  {
    year: "2024 — Present",
    title: "Full-Stack Java Developer",
    company: "Building Enterprise Solutions",
    points: [
      "Architected and developed DataKavach — a security platform with AWS Rekognition facial recognition",
      "Built cross-platform mobile apps using Angular + Capacitor for Abu Lehri community platform",
      "Designed and implemented real-time WebSocket features for live alerts and notifications",
      "Managed cloud deployments on AWS (S3, Rekognition) and Google Cloud Storage",
    ],
  },
  {
    year: "2023 — 2024",
    title: "Java Developer",
    company: "Web Application Development",
    points: [
      "Developed REST APIs with Spring Boot & Spring Security for IBT banking portal",
      "Built Angular frontends with reactive forms, JWT auth, and role-based access control",
      "Created admin dashboards using React, Material UI, and Vite for organization management",
      "Implemented data export features with Apache POI and Excel processing pipelines",
    ],
  },
  {
    year: "2022 — 2023",
    title: "Junior Developer",
    company: "Learning & Growing",
    points: [
      "Mastered Java 17, Spring Boot fundamentals, and the MVC design pattern",
      "Built foundational projects with MySQL, JPA/Hibernate, and RESTful services",
      "Learned Angular and React frameworks for modern single-page applications",
      "Developed the Yukti Classes educational website using Next.js",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Experience
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          My journey so far
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Two years of continuous learning, building, and shipping real-world
          applications.
        </motion.p>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {MILESTONES.map((m, i) => (
            <motion.div
              key={i}
              className={styles.milestone}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
            >
              <div className={styles.milestoneDot}>
                <div className="glow-dot" />
              </div>
              <div className={styles.milestoneCard}>
                <span className={styles.year}>{m.year}</span>
                <h3 className={styles.milestoneTitle}>{m.title}</h3>
                <span className={styles.company}>{m.company}</span>
                <ul className={styles.points}>
                  {m.points.map((p, pi) => (
                    <li key={pi}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
