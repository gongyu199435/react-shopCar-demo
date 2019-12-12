import React, { Component } from 'react'
import Login from './login'
import Layout from './layout'
import Notfount from '../Router/Notfound'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
export default class Index extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/layout" component={Layout} />
                        <Redirect exact from="/" to="/login"/>
                        <Route component={Notfount} />
                    </Switch>
                </div>
            </Router>

        )
    }
}