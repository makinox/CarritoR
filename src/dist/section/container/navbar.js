import React from 'react'

import img1 from '../../../assets/logo.svg'
import './navbar.css'

export default class extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div>
            <a href="#a"><img src={img1} alt="Logo de jesús bossa" /></a>
          </div>
          <div>
            <a href="#login">Inicia sesión</a>
          </div>
          <div>
            <a href="#products">Productos</a>
          </div>
        </nav>
      </header>
    )
  }
}