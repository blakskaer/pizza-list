import React, { useState, useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";

const NewPizzaForm = () => {
  const { dispatch } = useContext(PizzaContext);
  const [pizzaType, setPizzaType] = useState("");
  const [place, setPlace] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_PIZZA",
      pizza: {
        pizzaType,
        place,
      },
    });
    setPizzaType("");
    setPlace("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type of Pizza"
        value={pizzaType}
        onChange={(e) => setPizzaType(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Pizza Place, City"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        required
      />

      <input type="submit" value="Add pizza" />
    </form>
  );
};

export default NewPizzaForm;
