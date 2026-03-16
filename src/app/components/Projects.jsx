"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    id: 1,
    title: "DataKavach",
    subtitle: "Security & Surveillance Platform",
    description:
      "Enterprise-grade security management system with facial recognition using AWS Rekognition, real-time WebSocket alerts, QR-based access control, and a comprehensive analytics dashboard with interactive charts.",
    tech: ["Java 17", "Spring Boot", "Angular 16", "AWS S3", "AWS Rekognition", "WebSocket", "MySQL", "Chart.js", "Tailwind"],
    role: "Full-Stack Developer",
    highlights: ["Facial Recognition", "Real-time Alerts", "QR Access Control", "Analytics Dashboard"],
    color: "#ff6b6b", // Coral
  },
  {
    id: 2,
    title: "IBT Portal",
    subtitle: "International Banking & Trade System",
    description:
      "Robust international banking portal with role-based access, secure JWT authentication, multi-country support, and comprehensive trade transaction management. Built for handling complex financial workflows.",
    tech: ["Java 17", "Spring Boot", "Angular 16", "Spring Security", "JWT", "MySQL"],
    role: "Full-Stack Developer",
    highlights: ["JWT Authentication", "Role-based Access", "Multi-country Support", "Trade Management"],
    color: "#38bdf8", // Sky
  },
  {
    id: 3,
    title: "Abu Lehri",
    subtitle: "Cross-Platform Community App",
    description:
      "Community management platform delivered as a native mobile app using Capacitor. Features include Firebase push notifications, speech recognition, and a complete member management system with real-time updates.",
    tech: ["Java 17", "Spring Boot", "Angular 16", "Capacitor", "Firebase", "iOS", "Android"],
    role: "Full-Stack & Mobile Developer",
    highlights: ["Native Mobile App", "Push Notifications", "Speech Recognition", "Cross-Platform"],
    color: "#a3e635", // Lime
  },
  {
    id: 4,
    title: "Sangh Admin Dashboard",
    subtitle: "Modern Admin Panel",
    description:
      "Feature-rich admin dashboard built with React 19 and Material UI. Includes advanced data tables, animated celebrations, real-time toast notifications, and comprehensive CRUD operations for organization management.",
    tech: ["React 19", "Vite", "Material UI", "Axios", "React Router", "TypeScript"],
    role: "Frontend Developer",
    highlights: ["React 19", "Material UI", "Toast Notifications", "Admin CRUD"],
    color: "#fb923c", // Orange
  },
  {
    id: 5,
    title: "Sowilo",
    subtitle: "Business Landing Platform",
    description:
      "High-performance business website built with Next.js 15 featuring smooth Swiper carousels, EmailJS contact integration, syntax highlighting, and Isotope-based dynamic content filtering with stunning animations.",
    tech: ["Next.js 15", "React 18", "Bootstrap 5", "Swiper", "EmailJS", "SCSS"],
    role: "Frontend Developer",
    highlights: ["Next.js 15", "Swiper Carousels", "Email Integration", "Dynamic Filtering"],
    color: "#fb7185", // Rose
  },
  {
    id: 6,
    title: "Yukti Classes",
    subtitle: "Educational Institute Website",
    description:
      "Modern, responsive website for an educational institute built with Next.js. Features student galleries, course information, admission workflows, and optimized SEO for local discovery.",
    tech: ["Next.js", "React", "CSS3", "SEO"],
    role: "Full-Stack Developer",
    highlights: ["Student Gallery", "Course Management", "SEO Optimized", "Responsive Design"],
    color: "#d946ef", // Fuchsia
  },
  {
    id: 7,
    title: "Exports Backend",
    subtitle: "Trade Data Management API",
    description:
      "Scalable REST API backend for managing international export/import data. Features Excel file processing with Apache POI, secure endpoints with Spring Security, and efficient data pipelines for trade analytics.",
    tech: ["Java 17", "Spring Boot", "Spring Security", "MySQL", "Apache POI", "Lombok"],
    role: "Backend Developer",
    highlights: ["Excel Processing", "REST APIs", "Data Pipelines", "Secure Endpoints"],
    color: "#2dd4bf", // Teal
  },
];

const FILTERS = ["All", "Java 17", "Spring Boot", "Angular 16", "React", "Next.js"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.tech.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
        );

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          My Projects
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Real-world applications I&apos;ve built
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Each project represents a unique challenge — from facial recognition
          systems to cross-platform mobile apps.
        </motion.p>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className={styles.cardGlow}
                  style={{ background: project.color }}
                />
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <div
                      className={styles.projectIcon}
                      style={{ background: `${project.color}18`, color: project.color }}
                    >
                      {project.title.charAt(0)}
                    </div>
                    <div>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <span className={styles.projectSubtitle}>{project.subtitle}</span>
                    </div>
                  </div>

                  <p className={styles.projectDesc}>{project.description}</p>

                  <div className={styles.highlights}>
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className={styles.highlightBadge}
                        style={{ borderColor: `${project.color}33`, color: project.color }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className={styles.techRow}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.techBadge}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.role}>
                      💼 {project.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
