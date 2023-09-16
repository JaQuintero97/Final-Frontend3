import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email } = formData;

    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (name.length > 5 && email.match(emailValidation)) {
      console.log(name + email);
      setFormData({ name: "", email: "" });
      // Mostrar un mensaje de alerta
      alert("Te contacteremos vía correo electrónico");
    } else {
      alert("El nombre debe ser mayor a 5 caracteres")
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ingrese su Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ingrese su correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;