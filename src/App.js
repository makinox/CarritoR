import React, { Component } from 'react'

import Navbar from './dist/section/container/navbar'
// import Login from'./dist/section/container/login'
import Core from './dist/core/routes'

class App extends Component {
  render() {
    return (
      <div>
        <Core>
          <Navbar />
        </Core>
      </div>
    )
  }
}

export default App
