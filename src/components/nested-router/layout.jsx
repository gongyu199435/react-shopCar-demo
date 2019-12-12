import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
let left = {
    width: "300px",
    height: "800px",
    border: "1px solid red",
    "marginRight": "50px",
    "marginTop": "50px",
    float: 'left'
}
let right = {
    width: "600px",
    height: "800px",
    border: "1px solid pink",
    "marginRight": "50px",
    "marginTop": "50px",
    float: 'left'
}
function Mean1 () {
    return <div>
        我是菜单1组件
    </div>
}
function Mean2 () {
    return <div>
        我是菜单2组件
    </div>
}
export default class Layout extends Component {
    render () {
        return (
            <div>
                <div style={left} >
                    <p><Link to="/layout/mean1">123</Link></p>
                    <p><Link to="/layout/mean2">123</Link></p>
                </div>
                <div style={right} >
                    <Switch>
                        <Route path="/layout/mean1" component={Mean1} />
                        <Route path="/layout/mean2" component={Mean2} />
                        <Redirect exact from="/layout" to="/layout/mean2" />
                    </Switch>
                </div>
            </div >
        )
    }
}