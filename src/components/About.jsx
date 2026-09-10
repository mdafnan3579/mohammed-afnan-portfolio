import { motion } from "framer-motion";
import { professionalSummary } from "../data/resume";
import "../styles/About.css";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <h2 className="about-heading">About</h2>
        <p className="about-text">{professionalSummary}</p>
      </motion.div>
    </section>
  );
};

export default About;
