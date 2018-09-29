import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '../section/components/login'

export default (props) => (
    <Router>
        <div>
            {props.children}
            <Switch>
                <Route exact path="/login" component={Login} />
            </Switch>
        </div>
    </Router>
)