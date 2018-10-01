import React from 'react'
import {connect} from 'react-redux'

import ProductList from '../../fragments/components/productListLayout'
import Carrito from '../../fragments/components/carritoLayout'
import products from '../../../db/products.json'
import Home from '../components/homeComponent'

class App extends React.Component {

  state = {
    counter: 0,
    total: 0
  }

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
    // eslint-disable-next-line
    this.props.dispatch({
      type: 'SET_SELECTED',
      payload: {
        selected: await this.props.selected.filter((el) => el.index != className)
      }
    })

    await this.total()
  }

  total = async () => {
    let total = 0
    this.props.selected.map((el) => total += parseInt(el.cost, 10))
    this.setState({total})
  }

  handleChange = (e) => {
    const {value, className} = e.target
    console.log(className)
    console.log(value)
  }

  render() {
    return (
      <Home>
        <ProductList products={this.props.products} click={this.handleClick} />
        <Carrito selected={this.props.selected} delete={this.handleDelete} total={this.state.total} change={this.handleChange} proc={this.props.products} />
      </Home>
    )
  }
}

function mapStateToProps(state){
  return{
    products: state.products,
    selected: state.selected,
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App)