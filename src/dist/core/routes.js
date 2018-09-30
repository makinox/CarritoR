import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '../section/container/login'
import Home from '../section/container/home'

export default (props) => (
    <Router>
        <div>
            {props.children}
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </div>
    </Router>
)