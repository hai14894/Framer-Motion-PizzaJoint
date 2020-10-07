import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const containerVariants = {
  init: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 0.5,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(125, 121, 121)",
    boxShadow: "0px 0px 8px rgb(125, 121, 121)",
    transition: {
      yoyo: Infinity,
    },
  },
};

const nextVariants = {
  init: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust", "Square"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="init"
      exit="exit"
      animate="visible"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.2, fontWeight: "bold", originX: 0 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          variants={nextVariants}
          initial="init"
          animate="visible"
          className="next"
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
