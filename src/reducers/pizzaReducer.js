import uuid from "uuid/v1";

export const pizzaReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PIZZA":
      return [
        ...state,
        {
          pizzaType: action.pizza.pizzaType,
          place: action.pizza.place,
          id: uuid(),
        },
      ];
    case "REMOVE_PIZZA":
      return state.filter((pizza) => pizza.id !== action.id);
    default:
      return state;
  }
};
