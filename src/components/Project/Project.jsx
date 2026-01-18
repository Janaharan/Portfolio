import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Project.css";

const items = [
  {
    id: 1,
    title: "Ambar ERP (Professional)",
    img: "./assets/ambar.png",
    desc: "An enterprise-level ERP platform for textile retail businesses. I Worked on backend modules for Sales, Purchase, and Inventory using PHP, implementing complex GST calculations and real-time stock automation.",
    gitHub: null,
    link: "https://ambarerp.com/"
  },
  {
    id: 2,
    title: "Avoberry (Professional)",
    img: "./assets/avoberry.png",
    desc: "A business web application where I contributed to backend development and frontend integration. Built with Laravel and MySQL, I worked on database models, CRUD operations, and improving application stability.",
    gitHub: null,
    link: "https://avoberry.in/"
  },
  {
    id: 3,
    title: "RPS-Battleground",
    img: "https://github.com/Janaharan/RPS-Battleground/blob/main/Screenshots/RPS-Game.png?raw=true",
    desc: "A web-based game featuring multiple rounds and score tracking. Built with React JS and Framer Motion, it offers responsive animations and an engaging interactive UI.",
    gitHub: 'https://github.com/Janaharan/RPS-Battleground',
    link: null
  },
  {
    id: 4,
    title: "Expensive-Tracker",
    img: "https://github.com/Janaharan/Expensive-Tracker/blob/main/Screenshots/Expensive-Tracker_2.png?raw=true",
    desc: "Expensive-Tracker is a web application designed to help users track their expenses and gains. With a user-friendly interface, it allows you to manage and monitor your financial activities, ensuring you stay on top of your budget.",
    gitHub: 'https://github.com/Janaharan/Expensive-Tracker.git',
    link: null
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="project-container">
        <div className="projectWrapper">
          <div className="icontain">
            <img src={item.img} alt="image" ref={ref} />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2 className="title">{item.title}</h2>
            <p className="desc">{item.desc}</p>
            <div className="link-btn">
              {item.gitHub && (
                <a href={item.gitHub} target="_blank" rel="noopener noreferrer">
                  <motion.button whileHover={{ scale: 1.1 }}>
                    Github Link
                  </motion.button>
                </a>
              )}
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <motion.button whileHover={{ scale: 1.1 }}>
                    Link
                  </motion.button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.2 }}
        >
          Featured Projects
        </h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
