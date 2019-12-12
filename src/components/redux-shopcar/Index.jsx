import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Goodslist from './goodslist'
import Cars from './Cars'
import Styles from './index.module.css'
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
                    <div className={Styles.head} >
                        <span style={{ fontSize: 100 }} >购物车小demo</span>
                        <div style={{ marginTop: 100, fontSize: 50 }} >
                            <Link to="/goodslist">商品列表</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/cars">购物车{this.props.count > 0 && `(${this.props.count})`}</Link>
                        </div>
                    </div>
                    <hr />
                    <Switch>
                        <Route path="/goodslist" component={Goodslist} ></Route>
                        <Route path="/cars" component={Cars} ></Route>
                        <Redirect exact from="/" to="/goodslist" />
                    </Switch>
                </div>
            </Router>
        )
    }
}
const mapStatetoProps = state => {
    function totalCount () {
        let totalCount = 0
        state.forEach(item => {
            totalCount += item.num
        })
        return totalCount
    }
    return {
        count: totalCount(),
        goodslist: state
    }
}
export default connect(mapStatetoProps)(Index)