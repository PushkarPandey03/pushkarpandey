import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import RobotGuide from "./components/RobotGuide";
import Footer from "./components/Footer";
import AvatarBackground from "./components/AvatarBackground";

export default function Home() {
  return (
    <>
      <AvatarBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <RobotGuide />
    </>
  );
}
