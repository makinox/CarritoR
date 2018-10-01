import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '../section/container/login'
import Home from '../section/container/home'
import Detail from '../section/container/detail'

export default (props) => (
    <Router>
        <div>
            {props.children}

            {props.log ? (
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/detail" component={Detail} />
                    <Route component={Home} />
                </Switch>
            ) : (
                    <Switch>
                        <Route exact path="/" component={Login} />
                    </Switch>
                )}

        </div>
    </Router>
)