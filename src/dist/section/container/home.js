import React from 'react'

import ProductList from '../components/productListLayout'
import products from '../../../db/products.json'

export default class extends React.Component{

  state = {
    products
  }

  componentDidMount(){
    console.log(this.state.products)
  }


  render(){
    return <ProductList products={this.state.products} />
  }
}