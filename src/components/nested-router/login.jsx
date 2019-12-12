import React, { Component } from 'react'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "admin",
            password: "123456"
        }
    }
    login = () => {
        const { username, password } = this.state
        console.log(username, password)
        if (username === "admin" && password === "123456") {
            console.log(this.props)
            this.props.history.push('/layout')
        }
    }
    // 原始写法的双向绑定
    // changeusrname=e=>{
    //     this.setState({
    //         username:e.target.value
    //     })
    // }
    // changepassword=e=>{
    //     this.setState({
    //         password:e.target.value
    //     })
    // }
    // 精简版1--扑街
    // changeValue1 = (name,value) => {
    //     this.setState({
    //         // name: value
    //         // 属性名表达式
    //         [name]:value
    //     })
    // }
    // 精简版2 
    changeusrname = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render () {
        const { username, password } = this.state
        return (
            <div>
                <div>登录页面1</div>
                {/* 原始写法原始写法的双向绑定 */}
                {/* 用户名:<input type="text" name="username" value={username} onChange={this.changeusrname}/><br />
                密码:<input type="text" name="password"  value={password} onChange={this.changepassword}/><br /> */}
                {/* 精简版1 ---扑街 */}
                {/* 用户名:<input type="text" name="username" value={username} onChange={this.changeusrname} /><br />
                密码：<input type="text" value={password} onChange={e => this.changeValue1('password',e.target.value)}/><br/> */}
                用户名:<input type="text" name="username" value={username} onChange={this.changeusrname} /><br />
                密码:<input type="text" name="password" value={password} onChange={this.changeusrname} /><br />
                <button onClick={this.login}>登 录</button>
            </div>

        )
    }
}