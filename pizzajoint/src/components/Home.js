import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="home container"
    >
      <motion.h2 animate={{ fontSize: 50, color: "#202421" }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(125, 121, 121)",
            boxShadow: "0px 0px 8px rgb(125, 121, 121)",
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
