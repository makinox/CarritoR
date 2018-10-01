import React from 'react'
import { connect } from 'react-redux'

import Detail from '../components/detailComponent'

class App extends React.Component {

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

  total = async () => {
    let total = 0
    this.props.selected.map((el) => total += (parseInt(el.cost, 10) * parseInt(el.unity, 10)))
    this.props.dispatch({
      type: 'SET_TOTAL',
      payload: {
        total
      }
    })
  }

  render(){
    return <Detail selected={this.props.selected} total={this.props.total} buy={this.handleBuy} />
  }
}

function mapStateToProps(state){
  return{
    selected: state.selected,
    total: state.total
  }
}

export default connect(mapStateToProps)(App)