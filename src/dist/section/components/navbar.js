import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../../assets/logo.svg'
import './navbar.css'

export default (props) => (
  <header>
    {props.log ? (
      <nav>
        <div>
          <Link to='/'><img src={img1} alt="Logo de jesús bossa" /></Link>
        </div>
        <div>
          <Link to='/home'>Productos</Link>
        </div>
        <div>
          <Link to='/detail'>Detalle</Link>
        </div>
        <div>
          <a onClick={props.out}><span role='img' aria-label='Cerrar sesión'>⭕</span></a>
        </div>
      </nav>
    ) : (
      <nav>
      <div>
        <Link to='/'><img src={img1} alt="Logo de jesús bossa" /></Link>
      </div>
      <div>
        <Link to='/'>Inicia sesión</Link>
      </div>
    </nav>
    )}
  </header>
)