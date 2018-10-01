import React from 'react'
import './carritoLayout.css'

export default () => (
  <section>
    <div className="carrito">
      <div className="carrito-header">
        <p><strong>Total productos: </strong>2</p>
      </div>
      <div className="carrito-body">
        <div>
          <p>producto #1</p>
          <a >❌</a>
        </div>
        <div>
          <p>producto #2</p>
          <a >❌</a>
        </div>
        <div>
          <p>producto #3</p>
          <a >❌</a>
        </div>
        <div>
          <p>producto #4</p>
          <a >❌</a>
        </div>
      </div>
      <div className="carrito-footer">
        <a>Comprar</a>
        <a>Detalle</a>
      </div>
    </div>
  </section>
)