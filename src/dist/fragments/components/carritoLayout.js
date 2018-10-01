import React from 'react'
import './carritoLayout.css'

export default (props) => (
  <section>
    <div className="carrito">
      <div className="carrito-header">
        <p><strong>Total productos: </strong>{props.selected.length}</p>
      </div>
      <div className="carrito-body">
      {props.selected.map((el, i) => (
        <div key={i}>
          <p>{el.product}</p>
          <a ><span role="img" aria-label="Borrar" className={el.index} onClick={props.delete}>❌</span></a>
        </div>
      ))}
        {/* <div>
          <p>producto #1</p>
          <a ><span role="img" aria-label="Borrar">❌</span></a>
        </div>
        <div>
          <p>producto #2</p>
          <a ><span role="img" aria-label="Borrar">❌</span></a>
        </div>
        <div>
          <p>producto #3</p>
          <a ><span role="img" aria-label="Borrar">❌</span></a>
        </div>
        <div>
          <p>producto #4</p>
          <a ><span role="img" aria-label="Borrar">❌</span></a>
        </div> */}
      </div>
      <div className="carrito-footer">
        <a>Comprar</a>
        <a>Detalle</a>
      </div>
    </div>
  </section>
)