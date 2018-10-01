import React from 'react'
import { connect } from 'react-redux'

import Detail from '../components/detailComponent'

class App extends React.Component {
  render(){
    return <Detail selected={this.props.selected} total={this.props.total} />
  }
}

function mapStateToProps(state){
  return{
    selected: state.selected,
    total: state.total
  }
}

export default connect(mapStateToProps)(App)