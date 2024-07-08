import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <label htmlFor="username">Nombre de usuario: </label>
          <input type="text" id="username" name="username"/>
        </div>
        <div>
          <label htmlFor="password">Contraseña: </label>
          <input type="password" id="password" name="password"/>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
