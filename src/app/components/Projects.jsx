"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    id: 1,
    title: "Aegis Secure Sentinel",
    subtitle: "Security and surveillance platform",
    description:
      "Security management system with facial recognition, real-time WebSocket alerts, QR-based access control, and an analytics dashboard for monitoring operations.",
    tech: ["Java 17", "Spring Boot", "Angular 16", "AWS S3", "AWS Rekognition", "WebSocket", "MySQL", "Chart.js", "Tailwind"],
    role: "Full-Stack Developer",
    highlights: ["Facial Recognition", "Real-time Alerts", "QR Access Control", "Analytics Dashboard"],
    color: "#ff6b6b",
  },
  {
    id: 2,
    title: "GlobalTrade Nexus",
    subtitle: "International banking and trade system",
    description:
      "International banking portal with role-based access, secure JWT authentication, multi-country support, and trade transaction management.",
    tech: ["Java 17", "Spring Boot", "Angular 16", "Spring Security", "JWT", "MySQL"],
    role: "Full-Stack Developer",
    highlights: ["JWT Authentication", "Role-based Access", "Multi-country Support", "Trade Management"],
    color: "#38bdf8",
  },
  {
    id: 3,
    title: "CommuniTree Mobile",
    subtitle: "Cross-platform community app",
    description:
      "Community management platform delivered as a mobile app using Capacitor with push notifications, speech recognition, and real-time member updates.",
    tech: ["Java 17", "Spring Boot", "Angular 16", "Capacitor", "Firebase", "iOS", "Android"],
    role: "Full-Stack & Mobile Developer",
    highlights: ["Native Mobile App", "Push Notifications", "Speech Recognition", "Cross-Platform"],
    color: "#a3e635",
  },
  {
    id: 4,
    title: "Apex Management Suite",
    subtitle: "Modern admin panel",
    description:
      "Admin dashboard built with React 19 and Material UI. Includes data tables, toast notifications, and CRUD workflows for organization management.",
    tech: ["React 19", "Vite", "Material UI", "Axios", "React Router", "TypeScript"],
    role: "Frontend Developer",
    highlights: ["React 19", "Material UI", "Toast Notifications", "Admin CRUD"],
    color: "#fb923c",
  },
  {
    id: 5,
    title: "Solaris Digital Hub",
    subtitle: "Business landing platform",
    description:
      "Business website built with Next.js 15 featuring Swiper carousels, EmailJS contact integration, and dynamic content filtering.",
    tech: ["Next.js 15", "React 18", "Bootstrap 5", "Swiper", "EmailJS", "SCSS"],
    role: "Frontend Developer",
    highlights: ["Next.js 15", "Swiper Carousels", "Email Integration", "Dynamic Filtering"],
    color: "#fb7185",
  },
  {
    id: 6,
    title: "ScholarStream Portal",
    subtitle: "Educational institute website",
    description:
      "Responsive website for an educational institute with student galleries, course details, admission workflows, and local SEO support.",
    tech: ["Next.js", "React", "CSS3", "SEO"],
    role: "Full-Stack Developer",
    highlights: ["Student Gallery", "Course Management", "SEO Optimized", "Responsive Design"],
    color: "#d946ef",
  },
  {
    id: 7,
    title: "TradeMatrix Core API",
    subtitle: "Trade data management API",
    description:
      "REST API backend for international export and import data with Excel file processing, secure endpoints, and analytics-ready pipelines.",
    tech: ["Java 17", "Spring Boot", "Spring Security", "MySQL", "Apache POI", "Lombok"],
    role: "Backend Developer",
    highlights: ["Excel Processing", "REST APIs", "Data Pipelines", "Secure Endpoints"],
    color: "#2dd4bf",
  },
  {
    id: 8,
    title: "Yukti Classes",
    subtitle: "Educational coaching website",
    description:
      "Modern website for Yukti Classes with clear course information, a clean contact flow, and a mobile-friendly layout for students and parents.",
    tech: ["Next.js", "React", "SEO", "Responsive Design"],
    role: "Website Developer",
    highlights: ["Admissions", "Course Pages", "Lead Enquiries", "Mobile Friendly"],
    color: "#4f86c6",
    website: "https://yukticlasses.com",
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
          A few selected builds from client work and internal projects, spanning
          education, finance, APIs, and mobile experiences.
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
                <div className={styles.cardGlow} style={{ background: project.color }} />
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
                    <span className={styles.role}>{project.role}</span>
                    {project.website && (
                      <a
                        href={project.website}
                        className={styles.projectLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit Website
                      </a>
                    )}
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
