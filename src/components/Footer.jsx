import { motion } from "framer-motion";
import { personalInfo } from "../data/resume";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <p>
        © {year} {personalInfo.name}. Built with React &amp; Vite.
      </p>
    </motion.footer>
  );
};

export default Footer;
