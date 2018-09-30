import React from 'react'
import Login from './../components/loginLayout'

import db from '../../../db/people.json'

export default class extends React.Component {

  state = {
    db
  }

  // componentDidMount(){
  //   // console.log(db)
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.user.value)
    // console.log(e.target.password.value)

    const log = db.map((el) => {
      if (el.username === e.target.user.value && el.password === e.target.password.value){
        return true
      }
      return false
    })

    if (log) window.location.href = '/home'
  }

  render(){
    return <Login submit={this.handleSubmit}/>
  }
}