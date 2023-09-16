import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../Routes/routes';
import { useContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  const isLightTheme = state.theme === 'light';

  const toggleTheme = () => {
    dispatch({ type: 'HANDLE_THEME', payload: isLightTheme ? 'dark' : 'light' });
  };

  return (
    <nav className={isLightTheme ? 'light' : 'dark'}>
      <div className='DH-ico'>
        <img src="/DH.ico" alt="logo DH" />
      </div>

      <ul>
        <li><Link to={routes.home}>Inicio</Link></li>
        <li><Link to={routes.contact}>Contactos</Link></li>
        <li><Link to={routes.favs}>Favoritos</Link></li>
      </ul>

      <button className='buttonTheme' onClick={toggleTheme}>
        Modo {isLightTheme ? 'Oscuro' : 'Claro'}
      </button>
    </nav>
  );
};

export default Navbar;