import React, { createContext, useReducer, useEffect } from "react";
import { pizzaReducer } from "../reducers/pizzaReducer";

export const PizzaContext = createContext();

const PizzaContextProvider = (props) => {
  const [pizzas, dispatch] = useReducer(pizzaReducer, [], () => {
    const localData = localStorage.getItem("pizzas");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("pizzas", JSON.stringify(pizzas));
  }, [pizzas]);
  return (
    <PizzaContext.Provider value={{ pizzas, dispatch }}>
      {props.children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextProvider;
