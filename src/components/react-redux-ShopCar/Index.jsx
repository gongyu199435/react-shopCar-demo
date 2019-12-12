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
import { connect } from 'react-redux'
class Index extends Component {
    componentDidMount () {
        window.addEventListener('beforeunload', () => {
            window.localStorage.setItem('goodlist', JSON.stringify(this.props.goodlist))
        })
    }
    componentWillUnmount () {
        window.removeEventListener('beforeunload', () => { })
    }
    render () {
        return (
            <Router>
                <div>
                    <span>购物车</span>
                    <p>
                        <Link to="/goodlist">商品列表</Link> &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link to="/carlist">购物车{this.props.count > 0 && `(${this.props.count})`}</Link>
                    </p>
                    <div>
                        <Switch>
                            <Route path="/goodlist" component={Goodlist} />
                            <Route path="/carlist" component={Carlist} />
                            <Redirect exact from="/" to="/carlist" />
                            <Route component={Notfound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }

}
const mapStatetoProps = (state) => {
    function totalCount () {
        let totalCount = 0
        state.forEach(item => {
            totalCount += item.num
        })
        return totalCount
    }
    return {
        count: totalCount(),
        goodlist: state
    }
}
export default connect(mapStatetoProps, null)(Index)