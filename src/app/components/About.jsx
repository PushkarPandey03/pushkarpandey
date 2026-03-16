"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.css";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.span className="section-label" {...fadeUp(0)}>
          About Me
        </motion.span>
        <motion.h2 className="section-title" {...fadeUp(0.1)}>
          Turning ideas into reliable software
        </motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.2)}>
          A passionate developer who bridges the gap between complex backend
          systems and intuitive user interfaces.
        </motion.p>

        <div className={styles.grid}>
          <motion.div className={styles.story} {...fadeUp(0.3)}>
            <div className={styles.terminal}>
              <div className={styles.terminalBar}>
                <span className={styles.dot} style={{ background: "#ff5f56" }} />
                <span className={styles.dot} style={{ background: "#ffbd2e" }} />
                <span className={styles.dot} style={{ background: "#27c93f" }} />
                <span className={styles.terminalTitle}>about_pushkar.md</span>
              </div>
              <div className={styles.terminalBody}>
                <p>
                  <span className={styles.lineNum}>01</span>
                  <span className={styles.mdH}># </span>Who I Am
                </p>
                <p>
                  <span className={styles.lineNum}>02</span>
                </p>
                <p>
                  <span className={styles.lineNum}>03</span>
                  I&apos;m <strong>Pushkar Pandey</strong>, a Full-Stack Java Developer
                </p>
                <p>
                  <span className={styles.lineNum}>04</span>
                  with <strong>2+ years</strong> of hands-on experience building
                </p>
                <p>
                  <span className={styles.lineNum}>05</span>
                  enterprise-grade web applications. My day starts
                </p>
                <p>
                  <span className={styles.lineNum}>06</span>
                  with <span className={styles.highlight}>Spring Boot</span> APIs and ends with
                </p>
                <p>
                  <span className={styles.lineNum}>07</span>
                  pixel-perfect frontends in <span className={styles.highlight}>Angular</span> &amp; <span className={styles.highlight}>React</span>.
                </p>
                <p>
                  <span className={styles.lineNum}>08</span>
                </p>
                <p>
                  <span className={styles.lineNum}>09</span>
                  <span className={styles.mdH}>## </span>What I Do
                </p>
                <p>
                  <span className={styles.lineNum}>10</span>
                </p>
                <p>
                  <span className={styles.lineNum}>11</span>
                  From designing <span className={styles.highlight}>REST APIs</span> and database
                </p>
                <p>
                  <span className={styles.lineNum}>12</span>
                  schemas to implementing real-time features with
                </p>
                <p>
                  <span className={styles.lineNum}>13</span>
                  <span className={styles.highlight}>WebSockets</span>, cloud deployments on <span className={styles.highlight}>AWS</span>,
                </p>
                <p>
                  <span className={styles.lineNum}>14</span>
                  and cross-platform mobile apps with <span className={styles.highlight}>Capacitor</span>
                </p>
                <p>
                  <span className={styles.lineNum}>15</span>
                  — I handle the full development lifecycle.
                </p>
                <p>
                  <span className={styles.lineNum}>16</span>
                </p>
                <p>
                  <span className={styles.lineNum}>17</span>
                  <span className={styles.mdH}>## </span>My Approach
                </p>
                <p>
                  <span className={styles.lineNum}>18</span>
                </p>
                <p>
                  <span className={styles.lineNum}>19</span>
                  Clean code. Scalable architecture. User-first
                </p>
                <p>
                  <span className={styles.lineNum}>20</span>
                  thinking. I believe great software is built at
                </p>
                <p>
                  <span className={styles.lineNum}>21</span>
                  the intersection of engineering rigor and
                </p>
                <p>
                  <span className={styles.lineNum}>22</span>
                  creative problem-solving.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.infoCards} {...fadeUp(0.4)}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>⚡</div>
              <div>
                <h4 className={styles.infoTitle}>Focus Area</h4>
                <p className={styles.infoText}>Enterprise Web Applications, REST APIs, Microservices & Modern SPAs</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h4 className={styles.infoTitle}>Location</h4>
                <p className={styles.infoText}>India</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>💼</div>
              <div>
                <h4 className={styles.infoTitle}>Experience</h4>
                <p className={styles.infoText}>2+ years as Full-Stack Java Developer</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>✨</div>
              <div>
                <h4 className={styles.infoTitle}>Passion</h4>
                <p className={styles.infoText}>Building products that solve real-world problems at scale</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
