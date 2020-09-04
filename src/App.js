import React from "react";
import PizzaContextProvider from "./contexts/PizzaContext";
import Navbar from "./components/NavBar";
import PizzaList from "./components/PizzaList";
import NewPizzaForm from "./components/PizzaForm";

function App() {
  return (
    <div className="App">
      <PizzaContextProvider>
        <Navbar />
        <PizzaList />
        <NewPizzaForm />
      </PizzaContextProvider>
    </div>
  );
}

export default App;
