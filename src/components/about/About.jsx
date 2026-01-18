import "./About.css";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  let skills = ["PHP", "Laravel", "MySQL", "React.js", "Filament", "Tailwind CSS", "Bootstrap"];

  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2, // Delay between each child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 'some' }} // Trigger animation only once when in view
      >
        <motion.h1 variants={itemVariants}>Passion fuels Purpose!</motion.h1>
        <motion.p variants={itemVariants}>
          I'm <strong>Janaharan</strong>, a Software Developer with over a year of
          professional experience. I currently specialize in building scalable
          backend systems and ERP solutions at <strong>AWP Solutions Pvt. Ltd</strong>.
          With expertise in{" "}
          {skills.map((skill, index) => (
            <React.Fragment key={skill}>
              <strong>{skill}</strong>
              {index < skills.length - 1 && ", "}
            </React.Fragment>
          ))}{" "}
          and more...
        </motion.p>
        <motion.p variants={itemVariants}>
          I love crafting responsive, efficient web applications that solve real-world
          business problems. I'm dedicated to continuous learning and collaborating
          with teams to drive impactful projects.
        </motion.p>
        <motion.a variants={itemVariants}
          href="./resume/Janaharan_Resume_updated.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download={true}
        >
          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.15,
              border: "2px solid #fff",
              backgroundColor: "transparent",
              color: "white",
            }}
            transition={{ duration: 0.5 }}
          >
            Download CV
          </motion.button>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default About;
