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
      stiffness: 120,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
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
const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "pepperoni",
    "seafood",
    "basil",
    "olives",
    "extra cheese",
  ];

  return (
    <motion.div className="toppings container" variants={containerVariants}
    initial="init"
    animate="visible"
    exit="exit">
      <h3>Step 2: Choose Toppings</h3>
      <motion.ul
        
      >
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.2, fontWeight: "bold", originX: 0 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </motion.ul>

      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
