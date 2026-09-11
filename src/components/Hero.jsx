import { motion } from "framer-motion";
import { ChevronDown, FileText, ArrowRight } from "lucide-react";
import { personalInfo, heroTaglines } from "../data/resume";
import { useTypewriter } from "../hooks/useTypewriter";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { techLogos } from "./icons/techLogos";
import "../styles/Hero.css";

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

// Decorative logos drifting around the Hero — purely ambient, so each gets
// its own position/size/timing to avoid feeling like a grid.
const floatingIcons = [
  { skill: "React.js", top: "16%", left: "8%", size: 34, duration: 7, delay: 0 },
  { skill: "Node.js", top: "70%", left: "12%", size: 28, duration: 8, delay: 1.2 },
  { skill: "TypeScript", top: "22%", left: "88%", size: 30, duration: 6.5, delay: 0.6 },
  { skill: "Docker", top: "66%", left: "90%", size: 32, duration: 9, delay: 0.3 },
  { skill: "MongoDB", top: "44%", left: "5%", size: 24, duration: 7.5, delay: 2 },
  { skill: "AWS", top: "10%", left: "50%", size: 26, duration: 8.5, delay: 1.6 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {
  const typedTagline = useTypewriter(heroTaglines);

  return (
    <section id="hero" className="hero">
      <div className="hero-floating-icons" aria-hidden="true">
        {floatingIcons.map((icon) => (
          <img
            key={icon.skill}
            src={techLogos[icon.skill]}
            alt=""
            className="hero-floating-icon"
            style={{
              top: icon.top,
              left: icon.left,
              width: icon.size,
              height: icon.size,
              animationDuration: `${icon.duration}s`,
              animationDelay: `${icon.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="hero-eyebrow">
          Hi, I&apos;m
        </motion.p>

        <motion.h1 variants={item} className="hero-name">
          {personalInfo.name}
        </motion.h1>

        <motion.h2 variants={item} className="hero-title">
          {personalInfo.title}
        </motion.h2>

        <motion.p variants={item} className="hero-tagline">
          <span>{typedTagline}</span>
          <span className="hero-cursor" aria-hidden="true" />
        </motion.p>

        <motion.div variants={item} className="hero-cta-row">
          <a href="#projects" className="hero-cta-btn hero-cta-primary">
            View Projects
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="hero-cta-btn hero-cta-ghost"
          >
            Resume
            <FileText size={16} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div variants={item} className="hero-socials">
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Mohammed Afnan on LinkedIn"
            className="hero-social-link"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Mohammed Afnan on GitHub"
            className="hero-social-link"
          >
            <GithubIcon size={20} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.6, repeat: Infinity } }}
      >
        <ChevronDown size={22} aria-hidden="true" />
      </motion.div>
    </section>
  );
};

export default Hero;
