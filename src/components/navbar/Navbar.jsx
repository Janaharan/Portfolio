import Sidebar from "../sidebar/Sidebar";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  let variants = {
    hovers: {
      whileHover: { scale: 1.2 },
      onHoverStart: (e) => {},
      onHoverEnd: (e) => {},
    },
  };

  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, y: -15, scaleY: 0.5 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          transition={{ duration: 0.5 }}
        >
          JANAHARAN
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, y: -15, scaleY: 0.5 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/janaharan/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            whileTap={{ opacity: 0.5 }}
          >
            <img src="/link.png" alt="linkedin" />
          </motion.a>

          <motion.a
            href="https://github.com/Janaharan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            whileTap={{ opacity: 0.5 }}
          >
            <img src="/git.png" alt="github" className="git" />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/jana_haran/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            whileTap={{ opacity: 0.5 }}
          >
            <img src="/insta.svg" alt="instagram" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
