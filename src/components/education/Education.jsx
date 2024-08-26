import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Science (M.Sc.) in Computer Science',
      institution: 'Sri Krishna Arts and Science College, Coimbatore',
      year: '2024',
      description: 'CGPA : 7.5',
    },
    {
      degree: 'Bachelor of Science (B.Sc.) in Computer Science',
      institution: 'Mary Matha College of Arts & Science, Theni',
      year: '2021',
      description: 'CGPA : 8.1',
    },
  ];

  return (
    <div className="education-section">
      <motion.h2 initial={{x:"-100%",opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5}}>Education</motion.h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div className="timeline-content" initial={{x:"100%"}} whileInView={{x:0}} transition={{duration:0.5}} whileHover={{scale:1.2}}>
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
              <p className='des'>{edu.description}</p>
            </motion.div>
            <div className="timeline-dot"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
