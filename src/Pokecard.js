import React from "react";

function Pokecard(props) {
  let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

  return (
    <div className="Pokecard">
      <h2 className="Pokecard-name">{props.name}</h2>
      <img className="Pokecard-img" src={img} />
      <p className="Pokecard-data">
        <b>Type: </b>
        {props.type}
      </p>
      <p className="Pokecard-data">
        <b>EXP: </b>
        {props.base_experience}
      </p>
    </div>
  );
}

export default Pokecard;
