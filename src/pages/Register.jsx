import React from 'react';

function Register() {
  return (
    <div>
      <h1>Registro</h1>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
