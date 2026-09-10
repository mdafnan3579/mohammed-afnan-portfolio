import { motion } from "framer-motion";
import { coreCompetencies } from "../data/resume";
import { skillIcons, defaultSkillIcon, categoryIcons } from "./icons/skillIcons";
import "../styles/Skills.css";

const categoryVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-heading">Skills</h2>
      <p className="skills-subheading">
        Core competencies across the stack, from frontend to AI orchestration.
      </p>

      <div className="skills-categories">
        {coreCompetencies.map((group) => {
          const CategoryIcon = categoryIcons[group.category] ?? defaultSkillIcon;

          return (
            <motion.div
              key={group.category}
              className="skills-category"
              variants={categoryVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="skills-category-header">
                <CategoryIcon size={20} aria-hidden="true" />
                <h3>{group.category}</h3>
              </div>

              <motion.div
                className="skills-grid"
                variants={gridVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {group.skills.map((skill) => {
                  const SkillIcon = skillIcons[skill] ?? defaultSkillIcon;

                  return (
                    <motion.div
                      key={skill}
                      className="skill-chip"
                      variants={itemVariants}
                    >
                      <SkillIcon className="skill-chip-icon" size={22} aria-hidden="true" />
                      <span>{skill}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
