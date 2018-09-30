import React, { Component } from 'react'

import Navbar from './dist/section/components/navbar'
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
