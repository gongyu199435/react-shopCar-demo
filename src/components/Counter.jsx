import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Counter extends Component {
    constructor(props){
        super()
        this.state={
            count:props.initCount
        }
    }
    add=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            this.props.callback(this.state.count)
        })
    }
    render () {
        return (
            <div>
                <p>值:{this.state.count}</p>
                <p onClick={this.add}>+1</p>
            </div>
        )
    }
}
Counter.propTypes = {
    initCount: propTypes.number.isRequired
}
Counter.defaultProps={
    initCount:100
}