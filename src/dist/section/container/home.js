import React from 'react'
import { connect } from 'react-redux'

import ProductList from '../../fragments/components/productListLayout'
import Carrito from '../../fragments/components/carritoLayout'
import products from '../../../db/products.json'
import Home from '../components/homeComponent'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'SET_PRODUCTS',
      payload: {
        products
      }
    })
  }

  handleClick = async (e) => {
    const { className } = e.target
    // eslint-disable-next-line
    let el = await this.props.products.filter((el) => el.index == className)[0]
    el.unity = 1
    const duplicity = this.props.selected.some((aux) => el.index === aux.index)
    if (this.props.counter === 0) {
      this.props.dispatch({
        type: 'SET_SELECTED',
        payload: {
          selected: [el],
          counter: 1
        }
      })
    } else if (duplicity) {
      return 0
    } else {
      this.props.dispatch({
        type: 'SET_SELECTED',
        payload: {
          selected: [...this.props.selected, el],
          counter: 1
        }
      })
    }

    await this.total()
  }

  handleDelete = async (e) => {
    const { className } = e.target
    this.props.dispatch({
      type: 'SET_SELECTED',
      payload: {
        // eslint-disable-next-line
        selected: await this.props.selected.filter((el) => el.index != className),
        counter: 1
      }
    })

    await this.total()
  }

  total = async () => {
    let total = 0
    let cantidad = 0
    this.props.selected.map((el) => total += (parseInt(el.cost, 10) * parseInt(el.unity, 10)))
    this.props.selected.map((el) => cantidad += parseInt(el.unity, 10))
    this.props.dispatch({
      type: 'SET_TOTAL',
      payload: {
        total,
        cantidad
      }
    })
  }

  handleChange = async (e) => {
    const {value, className} = e.target
    // eslint-disable-next-line
    const index = this.props.selected.findIndex((el => el.index == className))
    const update = {...this.props.selected[index], unity: value }

    const selected = [
      ...this.props.selected.slice(0, index),
      update,
      ...this.props.selected.slice(index + 1)
    ]

    await this.props.dispatch({
      type: 'SET_SELECTED',
      payload: {
        selected,
        counter: 1
      }
    })
    await this.total()
  }

  handleBuy = async () => {
    if (window.confirm('Está seguro de comprar?')) {
      await this.props.dispatch({
        type: 'SET_SELECTED',
        payload: {
          // eslint-disable-next-line
          selected: [{}],
          counter: 0
        }
      })
      await this.total()
    }
  }

  render() {
    return (
      <Home>
        <ProductList products={this.props.products} click={this.handleClick} />
        <Carrito 
          selected={this.props.selected} 
          delete={this.handleDelete} 
          total={this.props.total} 
          change={this.handleChange} 
          cantidad={this.props.cantidad}
          buy={this.handleBuy}
        />
      </Home>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    selected: state.selected,
    counter: state.counter,
    total: state.total,
    cantidad: state.cantidad
  }
}

export default connect(mapStateToProps)(App)