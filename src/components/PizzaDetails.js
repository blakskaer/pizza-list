import React, { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";

const PizzaDetails = ({ pizza }) => {
  const { dispatch } = useContext(PizzaContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_PIZZA", id: pizza.id })}>
      <div className="pizzaType">{pizza.pizzaType}</div>
      <div className="place">{pizza.place}</div>
    </li>
  );
};

export default PizzaDetails;
