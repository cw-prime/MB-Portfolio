import React, { useState, useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ContinuousScroll from '../../components/ContinuousScroll/ContinuousScroll';
import { motion } from "framer-motion";
import client, { urlFor } from "../../client";
import "./Skills.css";

const Skills = (props) => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <section id="skills" {...props}>
      <h2 className="head-text">Skills & Experiences</h2>
      <div  className="app__skills-container">
        {/* Skills list */}
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experiences list */}
        <ContinuousScroll>
          <div className="app__skills-exp">
            {experiences.map((experience) => (
              <motion.div className="app__skills-exp-item" key={experience.year}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>

                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => (
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <div className="work-logo">
                        {work.logo && (
                          <img
                            src={urlFor(work.logo).url()}
                            alt={work.company + " logo"}
                          />
                        )}
                      </div>
                      <div className="work-text">
                        <h4 className="bold-text">
                          {work.name}
                        </h4>
                        <p className="p-text">{work.company}</p>
                      </div>

                      <ReactTooltip
                        id={work.name}
                        place="top"
                        effect="solid"
                        content= {work.desc}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </ContinuousScroll>
      </div>
    </section>
  );
};

export default Skills;
