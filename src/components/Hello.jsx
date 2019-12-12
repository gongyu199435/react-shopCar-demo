import React,{Component} from 'react'

import PropTypes from 'prop-types'

// 定义组件
class Hello extends Component{ 
    // 静态属性，类型约束
    static propTypes = {
        address: PropTypes.string.isRequired,
        skill:PropTypes.string.isRequired
    }

    // 静态属性，默认值约束
    static defaultProps = {
        skill:'泡妞'
    }

    constructor(props){
        // 重写了构造器之后，并且我们这个类Hello继承了别的类，第一句必须调用super
        super() 

        // console.log(props)

        // 定义模型，vue中写在data函数中
        this.state = {
            name: '张三丰',
            age: 666
        }
    }

    // 普通的函数
    // changeName() {
    //     console.log("222",this)
    // }

    // 箭头函数
    changeName = () => {
        // console.log("222",this)

        // 这样更改之后，视图不会更新
        // this.state.name = '张无忌'

        this.setState({
            name:'张无忌'
        },() => {
            // 它等我们的异步操作执行完之后，会自动执行这个回调函数
            console.log("--------------------")
            console.log(this.state)
        })
    }

    // 箭头函数
    changeAge = age => {
        this.setState({
            age
        },() => {
            console.log('age 更改完毕')
        })
    }

    // 必须要实现的生命周期方法
    render() {
        console.log("---render---")
        return <div>
            <p>姓名是：{this.state.name}</p>
            <p>年纪是：{this.state.age}</p>
            <p>地址是：{this.props.address}</p>
            <p>技能是：{this.props.skill}</p>
            {/* <button onClick={() => {console.log("111",this)}}>更改名字</button><br/> */}
            {/* <button onClick={this.changeName.bind(this)}>更改名字</button><br/> */}
            <button onClick={this.changeName}>更改名字</button><br/>

            {/* <button onClick={() => {
                console.log("1111111")
                this.changeAge(555)
            }}>更改年龄</button> */}
            {/* 上面是完整写法，下面是简写 */}
            <button onClick={() => this.changeAge(555)}>更改年龄</button>
        </div>
    }
}

// 导出组件
export default Hello