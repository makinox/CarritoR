import React from 'react'
import {connect} from 'react-redux'

import Login from './../components/loginLayout'
import db from '../../../db/people.json'

class App extends React.Component {

  state = {
    db
  }

  handleSubmit = (e) => {
    e.preventDefault()

    db.map( async (el) => {
      if (el.username === e.target.user.value && el.password === e.target.password.value){
        window.location.href = '/home'
        await this.props.dispatch({
          type: 'login',
          payload: {
            log: true
          }
        })
      }
    })
  }

  render(){
    return <Login submit={this.handleSubmit}/>
  }
}

export default connect()(App)