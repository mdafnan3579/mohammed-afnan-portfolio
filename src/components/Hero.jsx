import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { personalInfo, heroTaglines } from "../data/resume";
import { useTypewriter } from "../hooks/useTypewriter";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import "../styles/Hero.css";

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
      <motion.div variants={container} initial="hidden" animate="show">
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
