import React from 'react'

export default (props) => (
  <section>
    {props.products.map((el, i) => {
      return(
        <div className="products" key={i}>
          <div className="products-head">
            <p className="products-head-id">{el.index}</p>
            <h3 className="products-head-productname">{el.product}</h3>
          </div>
          <div className="products-body">
          
          </div>
        </div>
      )
    })}
  </section>
)