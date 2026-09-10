import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { personalInfo } from "../data/resume";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import "../styles/Contact.css";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants} className="contact-heading">
          Get In Touch
        </motion.h2>
        <motion.p variants={itemVariants} className="contact-subheading">
          Open to new opportunities and interesting problems — feel free to
          reach out.
        </motion.p>

        <motion.a
          variants={itemVariants}
          href={`mailto:${personalInfo.email}`}
          className="contact-mailto-button"
        >
          <Mail size={18} aria-hidden="true" />
          Say Hello
        </motion.a>

        <motion.div variants={itemVariants} className="contact-links">
          <a href={`mailto:${personalInfo.email}`} className="contact-link">
            <Mail size={18} aria-hidden="true" />
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <LinkedinIcon size={18} />
            {personalInfo.linkedin}
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <GithubIcon size={18} />
            {personalInfo.github}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
