import React from 'react'
import { connect } from 'react-redux'

import Navbar from './dist/section/components/navbar'
import Core from './dist/core/routes'

class App extends React.Component {

  logOut = () => {
    this.props.dispatch({
      type: 'login',
      payload: {
        log: false
      }
    })
    window.location.href = '/'
  }

  render() {
    return (
      <Core log={this.props.log} >
        <Navbar log={this.props.log} out={this.logOut}/>
      </Core>
    )
  }
}

function mapStateToProps(state){
  return{
    log: state.log
  }
}

export default connect(mapStateToProps)(App)
