import React from "react";
import Pokedex from "./Pokedex";
import pokemon from "./pokemonProps";

function App() {
  return (
    <>
      <Pokedex pokemon={pokemon} />
    </>
  );
}

export default App;
