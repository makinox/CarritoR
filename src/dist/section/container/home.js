import React from 'react'
import {connect} from 'react-redux'

import ProductList from '../../fragments/components/productListLayout'
import Carrito from '../../fragments/components/carritoLayout'
import products from '../../../db/products.json'
import Home from '../components/homeComponent'

class App extends React.Component {

  componentDidMount(){
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
    const duplicity = this.props.selected.some((aux) => el.index === aux.index)
    if (this.props.counter === 0) {
      this.props.dispatch({
        type: 'SET_SELECTED',
        payload: {
          selected: [el],
          counter: 1
        }
      })
    } else if (duplicity){
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
    this.props.selected.map((el) => total += (parseInt(el.cost, 10)))
    this.props.dispatch({
      type: 'SET_TOTAL',
      payload: {
        total
      }
    })
  }

  // handleChange = async (e) => {
  //   const {value, className} = e.target
  //   console.log(className)
  //   console.log(value)
  // }

  handleBuy = () => {
    if (window.confirm('Está seguro de comprar?')){
      this.props.dispatch({
        type: 'SET_SELECTED',
        payload: {
        // eslint-disable-next-line
        selected: [{}],
        counter: 0
      }
      })
      this.total()
    }
  }

  render() {
    return (
      <Home>
        <ProductList products={this.props.products} click={this.handleClick} />
        <Carrito selected={this.props.selected} delete={this.handleDelete} total={this.props.total} change={this.handleChange} buy={this.handleBuy} />
      </Home>
    )
  }
}

function mapStateToProps(state){
  return{
    products: state.products,
    selected: state.selected,
    counter: state.counter,
    total: state.total
  }
}

export default connect(mapStateToProps)(App)