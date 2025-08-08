import { motion } from "framer-motion";
import "./skills.css";

// Import individual icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFramer } from "react-icons/si";

const Skills = () => {
  const textVariants = {
    initial: { x: -100, y: -100, opacity: 0 },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  // Skill list with associated icons
  const skillList = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Framer Motion", icon: <SiFramer /> },
    {
      name: "Git & GitHub",
      icon: (
        <>
          <FaGitAlt style={{ marginRight: "0.3rem" }} />
          <FaGithub />
        </>
      ),
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.h1 variants={textVariants} initial="initial" animate="animate" className="sTitle">
          My Skills
        </motion.h1>
        <motion.ul
          className="skills-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {skillList.map((skill, index) => (
            <motion.li
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
