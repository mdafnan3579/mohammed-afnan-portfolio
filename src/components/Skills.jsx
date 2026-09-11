import { motion } from "framer-motion";
import { coreCompetencies } from "../data/resume";
import { skillIcons, defaultSkillIcon, categoryIcons } from "./icons/skillIcons";
import { techLogos, brandSkillNames, badgedSkillNames } from "./icons/techLogos";
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
  hidden: { opacity: 0, y: 16, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-heading section-heading">Skills</h2>
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
                <motion.span
                  className="skills-category-icon"
                  initial={{ rotate: -90, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                >
                  <CategoryIcon size={20} aria-hidden="true" />
                </motion.span>
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
                  const logoSrc = techLogos[skill];
                  const isBrand = brandSkillNames.has(skill);
                  const needsBadge = badgedSkillNames.has(skill);
                  const SkillIcon = skillIcons[skill] ?? defaultSkillIcon;

                  const icon = logoSrc ? (
                    <img src={logoSrc} alt="" loading="lazy" />
                  ) : (
                    <SkillIcon
                      size={isBrand ? 40 : 34}
                      aria-hidden="true"
                      className={isBrand ? undefined : "skill-tile-icon-plain"}
                    />
                  );

                  return (
                    <motion.div
                      key={skill}
                      className="skill-chip"
                      variants={itemVariants}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 300, damping: 14 },
                      }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <span
                        className={
                          needsBadge
                            ? "skill-tile-icon skill-tile-icon-badge"
                            : "skill-tile-icon"
                        }
                      >
                        {icon}
                      </span>
                      <span className="skill-tile-label">{skill}</span>
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
