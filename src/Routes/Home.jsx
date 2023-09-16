import React from 'react';
import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useContextGlobal();
  const isLightTheme = state.theme === 'light';

  return (
    <main className={isLightTheme ? 'light' : 'dark'}>
      <h1>Ódontologos</h1>
      <div className='card-grid'>
        {state.dentists.map((dentist) => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;