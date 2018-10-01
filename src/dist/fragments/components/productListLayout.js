import React from 'react'
import './productListLayout.css'

export default (props) => (
  <section>
    {props.products.map((el, i) => {
      return(
        <div className="products" key={i}>
          <div className="products-head">
            <img src={el.image} alt=""/>
          </div>
          <div className="products-body">
            <h3>{el.product}</h3>
            <p><strong>Unidades: </strong>{el.stock}</p>
            <p>${el.cost}</p>
          </div>
          <div className="products-footer">
            <a onClick={props.click} className={el.index}>Agregar</a>
          </div>
        </div>
      )
    })}
  </section>
)