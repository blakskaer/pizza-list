import React, { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";

const Navbar = () => {
  const { pizzas } = useContext(PizzaContext);
  return (
    <div className="navbar">
      <h1>Favorite Pizza List</h1>
      <p>Currently you have {pizzas.length} pizzas on your list...</p>
    </div>
  );
};

export default Navbar;
