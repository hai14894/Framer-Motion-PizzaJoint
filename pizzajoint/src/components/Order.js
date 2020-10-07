import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4,
      damping: 9,
      when: "beforeChildren",
      staggerChildren: 0.3
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <motion.div key={topping}>{topping}</motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
