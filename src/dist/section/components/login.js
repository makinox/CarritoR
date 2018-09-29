import React from 'react'
import './login.css'

export default () => (
  <section className="section-container-login">
    <div className="section-container-login-card">
      <div className="section-container-login-card-header">
        <h2>CarritoR</h2>
        <h3>Iniciar sesión</h3>
      </div>
      <div className="section-container-login-card-body">
        <form >
          <div>
            <label htmlFor="user" >Ingresa tu usuario</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="password">Ingresa tu contraseña</label>
            <input type="password" />
          </div>
          <div>
            <button type="submit">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  </section>
)