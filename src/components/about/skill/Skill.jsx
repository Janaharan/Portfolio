import React from "react";
import "./Skill.css";
import { motion, stagger } from "framer-motion";

const skills = [
  { name: "PHP", img: "./skills/php_icon.png" },        // New core language
  { name: "Laravel", img: "./skills/laravel_icon.png" },// New core framework
  { name: "MySQL", img: "./skills/mysql_icon.png" },    // Specific DB mentioned in resume
  { name: "JavaScript", img: "./skills/javascript_icon.png" },
  { name: "React.js", img: "./skills/react_icon.png" },
  { name: "Filament", img: "./skills/filament_icon.png" }, // Key tool mentioned in experience
  { name: "HTML", img: "./skills/html_icon.png" },
  { name: "CSS", img: "./skills/css_icon.png" },       // Could also be "Tailwind" if you prefer
  { name: "Git", img: "./skills/git_icon.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of children by 0.2 seconds
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 }, // Start slightly left and invisible
  visible: {
    opacity: 1,
    x: 0, // Animate to original position
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};




const Skill = () => {
  return (
    <div className="skills-section">
      <motion.h2
        className="section-title"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, }}
      >
        My Skills
      </motion.h2>

      <motion.div className="skills-container" variants={containerVariants}
        initial="hidden"
        whileInView="visible">
        {skills.map((skill, index) => (
          <motion.div key={index} className="skill-card" variants={itemVariants}>
            <motion.img src={skill.img} alt="image" />
            <motion.h3 >{skill.name}</motion.h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
