import React, { Component } from 'react'

import {
    HashRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
//导入子组件
import Goodlist from './goodlist'
import Carlist from './carlist'
import Notfound from '../Router/Notfound'

import store from './store'
export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    componentDidMount () {
        this.calcCount()
        store.subscribe(() => {
            this.calcCount()
        })
    }
    calcCount = () => {
        let list = store.getState()
        let totalCount = 0;
        list.forEach(item => {
            totalCount += item.num
        })
        this.setState({
            count: totalCount
        })
    }
    render () {
        const { count } = this.state
        return (
            <Router>
                <div>
                    <span>购物车</span>
                    <p>
                        <Link to="/goodlist">商品列表</Link> &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link to="/carlist">购物车{count > 0 && `(${count})`}</Link>
                    </p>
                    <div>
                        <Switch>
                            <Route path="/goodlist" component={Goodlist} />
                            <Route path="/carlist" component={Carlist} />
                            <Redirect exact from="/" to="goodlist" />
                            <Route component={Notfound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}