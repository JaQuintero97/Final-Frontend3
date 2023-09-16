import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { state, dispatch } = useContextGlobal();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        dispatch({ type: 'SET_DENTIST_DETAIL', payload: data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, id]);

  const { dentistDetail } = state;
  const themeClass = state.theme === 'light' ? 'light' : 'dark';

  return (
    <div className={`main ${themeClass}`}>
      <h1>DR: {dentistDetail.username}, {dentistDetail.name}</h1>
      <img src="/images/doctor.jpg" alt={`Doctor ${dentistDetail.name}`} />
      <h2>Detalles:</h2>
      <p>Telefono: {dentistDetail.phone}</p>
      <p>E-mail: {dentistDetail.email}</p>
      <p>Web: {dentistDetail.website}</p>
    </div>
  );
};

export default Detail;