import React from "react";
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
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="init"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping}>{topping}</motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
