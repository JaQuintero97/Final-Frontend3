import React from 'react';
import Form from '../Components/Form';
import { useContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { state } = useContextGlobal();
  const themeClass = state.theme === 'light' ? 'light' : 'dark';

  return (
    <div className={`main ${themeClass}`}>
      <h1>¿Tienes alguna pregunta?</h1>
      <p>Envíanos tus consultas y nos comunicaremos contigo pronto.</p>
      <Form />
    </div>
  );
};

export default Contact;





