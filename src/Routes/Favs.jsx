import React from "react";
import { useContextGlobal } from '../Components/utils/global.context';
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContextGlobal();
  const isLightTheme = state.theme === 'light';
  const hasFavorites = state.favs.length > 0;

  return (
    <div className={`main ${isLightTheme ? 'light' : 'dark'}`}>
      <h1>Odontólogos favoritos</h1>
      <div className="card-grid">
        {hasFavorites ? (
          state.favs.map((fav) => (
            <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
          ))
        ) : (
          <p>No hay odóntologo favorito</p>
        )}
      </div>
    </div>
  );
};

export default Favs;