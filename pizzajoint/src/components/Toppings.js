import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <motion.ul
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
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
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(125, 121, 121)",
            boxShadow: "0px 0px 8px rgb(125, 121, 121)",
          }}
        >
          Order
        </motion.button>
      </Link>
    </div>
  );
};

export default Toppings;
