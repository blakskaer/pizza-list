import React, { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";
import PizzaDetails from "./PizzaDetails";

const PizzaList = () => {
  const { pizzas } = useContext(PizzaContext);
  return pizzas.length ? (
    <div className="pizza-list">
      <ul>
        {pizzas.map((pizza) => {
          return <PizzaDetails pizza={pizza} key={pizza.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      You have no favorite pizza places. Get out there and eat ;)
    </div>
  );
};

export default PizzaList;
