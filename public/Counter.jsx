import React,{Component} from 'react'

import PropTypes from 'prop-types'

export default class Counter extends Component{
    constructor(props){
        super()

        this.state = {
            count: props.initCount
        }
    }

    add = () => {
        // props是只读的
        // this.props.initCount ++

        this.setState({
            count: this.state.count + 1 
        },() => {
            // 调用父组件传递过来的callback，给父组件传值
            // 子组件传值给父组件，通过回调函数
            this.props.callback(this.state.count)
        })
    }

    render() {
       return <div>
            <p>值：{this.state.count}</p>
            <button onClick={this.add}>+1</button>
       </div>
    }
}

// 类型约束
Counter.propTypes = {
    initCount: PropTypes.number.isRequired
}

// 默认值约束
Counter.defaultProps = {
    initCount: 100
}