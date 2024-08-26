import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Project.css";

const items = [
  {
    id: 1,
    title: "Expensive-Tracker",
    img: "https://github.com/Janaharan/Expensive-Tracker/blob/main/Screenshots/Expensive-Tracker_2.png?raw=true",
    desc: "Expensive-Tracker is a web application designed to help users track their expenses and gains. With a user-friendly interface, it allows you to manage and monitor your financial activities, ensuring you stay on top of your budget.",
    gitHub: 'https://github.com/Janaharan/Expensive-Tracker.git'
  },
  {
    id: 2,
    title: "RPS-Battleground",
    img: "https://github.com/Janaharan/RPS-Battleground/blob/main/Screenshots/RPS-Game.png?raw=true",
    desc: "RPS-Battleground is a web-based game that brings a competitive twist to the classic Rock-Paper-Scissors game. Players can engage in multiple rounds, track their scores, and enjoy an enhanced UI that makes the game more interactive and fun.",
    gitHub:'https://github.com/Janaharan/RPS-Battleground'
  },
  {
    id: 3,
    title: "Weather-App",
    img: "https://raw.githubusercontent.com/Janaharan/Weather-App/main/screenshot/WeatherApp.png",
    desc: "A simple weather application that allows users to get the current weather conditions for any city. The app uses the OpenWeatherMap API to fetch weather data and displays it dynamically using JavaScript.",
    gitHub: 'https://github.com/Janaharan/Weather-App.git'
  },
  {
    id: 4,
    title: "Task-Track",
    img: "https://raw.githubusercontent.com/Janaharan/Task-Track/main/screenshot/todo.png",
    desc: "A simple and interactive to-do list application that allows users to add, mark, and remove tasks. The app uses local storage to save the tasks, ensuring they persist even after the browser is closed.",
    gitHub: 'https://github.com/Janaharan/Task-Track.git'
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
              <a href={item.gitHub} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{scale:1.1}}
                >Github Link</motion.button>
              </a>
              {/* <a href={item.gitHub} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{scale:1.1}}
                >See Demo</motion.button>
              </a> */}
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
