import React from "react";
import Pokecard from "./Pokecard";

function Pokedex(props) {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {props.pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
