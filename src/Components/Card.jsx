import React, { useContext, useState } from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextGlobal();

  // Comprobar si el dentista está en favoritos
  const isDentistInFavs = state.favs.some(fav => fav.id === id);

  const addFav = () => {
    // Agregar el dentista a favoritos
    dispatch({
      type: 'ADD_TO_FAVS',
      payload: { name, username, id }
    });
  };

  const removeFav = () => {
    // Eliminar el dentista de favoritos
    dispatch({
      type: 'REMOVE_FROM_FAVS',
      payload: { id }
    });
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img style={{ width: "200px" }} src="./images/doctor.jpg" alt="doctor" />
        <h3>Nombre : {name}</h3>
        <h3>Usuario : {username}</h3>
      </Link>
      <button
        onClick={isDentistInFavs ? removeFav : addFav}
        className="favButton"
      >
        {isDentistInFavs ? "Eliminar de Favoritos" : "Favorito"}
      </button>
    </div>
  );
};

export default Card;