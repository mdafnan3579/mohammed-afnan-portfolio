import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { workExperience } from "../data/resume";
import "../styles/Experience.css";

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="experience-heading">Experience</h2>
      <p className="experience-subheading">
        6+ years building production SaaS platforms across healthcare,
        insurance, legal, real estate, and childcare.
      </p>

      <div className="timeline">
        {workExperience.map((job) => (
          <motion.div
            key={job.id}
            className="timeline-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <span
              className={`timeline-dot${job.current ? " timeline-dot-current" : ""}`}
              aria-hidden="true"
            />

            <div className="timeline-card">
              <div className="timeline-card-header">
                <h3 className="timeline-role">{job.title}</h3>
                {job.current && <span className="timeline-badge">Current</span>}
              </div>

              <p className="timeline-company">
                <Briefcase size={15} aria-hidden="true" />
                {job.company}
              </p>

              <div className="timeline-meta">
                <span>
                  <Calendar size={14} aria-hidden="true" />
                  {job.startDate} – {job.endDate}
                </span>
                <span>
                  <MapPin size={14} aria-hidden="true" />
                  {job.location}
                </span>
              </div>

              <ul className="timeline-highlights">
                {job.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
