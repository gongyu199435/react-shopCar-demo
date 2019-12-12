import React, { Component } from 'react'

import {
    HashRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
//导入子组件
import Newslist from './foodlist'
import Foodlist from './newslist'
import Notfound from './Notfound'
export default class Index extends Component {
    login = () => {

    }
    render () {
        return (
            <Router>
                <div>
                    <p>
                        <Link to="/newslist">新闻列表</Link> &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link to="/foodlist">食物列表</Link>
                    </p>
                    <div>
                        <Switch>
                            <Route path="/newslist" component={Newslist} />
                            <Route path="/foodlist" component={Foodlist} />
                            {/* query 传参方式 */}
                            <Route path="/newslist"
                            <Redirect exact from="/" to="foodlist" />
                            <Route component={Notfound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}