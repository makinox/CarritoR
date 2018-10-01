import React from 'react'
import { Link } from 'react-router-dom'

import './carritoLayout.css'

export default (props) => (
  <section>
    <div className="carrito">
      <div className="carrito-header">
        <p><strong>Productos: </strong>{props.selected.length}</p>
        <p><strong>Cantidad: </strong>{props.cantidad}</p>
        <p><strong>Total: </strong>{props.total}</p>
      </div>
      <div className="carrito-body">
        {props.selected.map((el, i) => (
          <div key={i}>
            <p>{el.product}</p>
            <input type="number" className={el.index} onChange={props.change} defaultValue={el.unity} max={el.stock} min={0}/>
            <a onClick={props.delete} ><span role="img" aria-label="Borrar" className={el.index} >❌</span></a>
          </div>
        ))}
      </div>
      <div className="carrito-footer">
        <a onClick={props.buy}>Comprar</a>
        <Link to='/detail'>Detalle</Link>
      </div>
    </div>
  </section>
)