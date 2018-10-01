import React from 'react'
import './carritoLayout.css'

export default (props) => (
  <section>
    <div className="carrito">
      <div className="carrito-header">
        <p><strong>Total productos: </strong>{props.selected.length}</p>
        <p><strong>Total: </strong>{props.total}</p>
      </div>
      <div className="carrito-body">
      {props.selected.map((el, i) => (
        <div key={i}>
          <p>{el.product}</p>

          {/* <input className={el.index}
            type="number"
            defaultValue={1}
            onChange={props.change}
            max={el.stock}
          /> */}

          <a ><span role="img" aria-label="Borrar" className={el.index} onClick={props.delete} >❌</span></a>
        </div>
      ))}
      </div>
      <div className="carrito-footer">
        <a>Comprar</a>
        <a>Detalle</a>
      </div>
    </div>
  </section>
)