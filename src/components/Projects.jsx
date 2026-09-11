import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { projects } from "../data/resume";
import { projectIcons } from "./icons/projectIcons";
import "../styles/Projects.css";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-heading section-heading">Projects</h2>
      <p className="projects-subheading">
        A sample of SaaS platforms shipped end-to-end, from architecture to
        production.
      </p>

      <motion.div
        className="projects-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project) => {
          const ProjectIcon = projectIcons[project.id] ?? Code2;

          return (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
            >
              <div className="project-card-icon">
                <ProjectIcon size={22} aria-hidden="true" />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
