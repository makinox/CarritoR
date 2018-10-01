import React from 'react'

import ProductList from '../../fragments/components/productListLayout'
import Carrito from '../../fragments/components/carritoLayout'
import products from '../../../db/products.json'
import Home from '../components/homeComponent'

export default class extends React.Component{

  state = {
    products
  }

  componentDidMount(){
    console.log(this.state.products)
  }


  render(){
    return (
      <Home>
        <ProductList products={this.state.products} />
        <Carrito />
      </Home>
    )
  }
}