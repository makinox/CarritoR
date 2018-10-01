import React from 'react'

import ProductList from '../../fragments/components/productListLayout'
import Carrito from '../../fragments/components/carritoLayout'
import products from '../../../db/products.json'
import Home from '../components/homeComponent'

export default class extends React.Component {

  state = {
    products,
    selected: [{ index: 0, product: "Carrito vacio" }],
    counter: 0,
    total: 0
  }

  handleClick = async (e) => {
    const { className } = e.target
    const el = await this.state.products.filter((el) => el.index == className)[0]

    const duplicity = this.state.selected.some((aux) => el.index === aux.index)

    if (this.state.counter === 0) {
      this.setState({ selected: [el], counter: 1 })
    } else if (duplicity){
      return 0
    } else {
      this.setState({ selected: [...this.state.selected, el] })
    }

    await this.total()
  }

  handleDelete = async (e) => {
    const { className } = e.target
    // console.log(className)
    this.setState({selected: await this.state.selected.filter((el) => el.index != className)})
    await this.total()
  }

  total = async () => {
    let total = 0
    this.state.selected.map((el) => total += parseInt(el.cost, 10))
    this.setState({total})
  }


  render() {
    return (
      <Home>
        <ProductList products={this.state.products} click={this.handleClick} />
        <Carrito selected={this.state.selected} delete={this.handleDelete} total={this.state.total} />
      </Home>
    )
  }
}