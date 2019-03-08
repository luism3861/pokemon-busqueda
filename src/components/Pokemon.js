import React from "react";
import "../index.css";

const Pokemon = props => {
  const { name, id, height,weight} = props.pokemon;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={props.imageUrl} alt={props.imageUrl} />
        </div>
        <div className="card-content">
          <h2>POKEMON: {name}</h2>
          <h2> Id : {id}</h2>
          <h2>Height : {height}</h2>
          <h2>Weight: {weight}</h2>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
