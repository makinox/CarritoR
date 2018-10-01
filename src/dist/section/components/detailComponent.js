import React from 'react'

import './detailComponent.css'

export default (props) => (
  <div className="detail-component">
    {console.log(props.selected)}
    {props.selected.map((el, i) => (
      <div className="detail-component-items" key={i}>
          <p><strong>Producto: </strong>{el.product}</p>
          <p><strong>Unidades: </strong>{el.unity}</p>
          <p><strong>Total: </strong>{el.unity * el.cost}</p>
      </div>
    ))}
    <div style={{justifySelf: 'center'}}>
      <p><strong>Total: </strong>{props.total}</p>
    </div>
    <div className="detail-component-footer">
      <a>Comprar</a>
      <a>Cancelar</a>
    </div>
  </div>
)