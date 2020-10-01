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
        <button>Create Your Pizza</button>
      </Link>
    </motion.div>
  );
};

export default Home;
