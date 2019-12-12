import React, { Component } from 'react'
import store from './store'
import { addCount,asyncMinusCount } from './store/Reduxcreators'
export default class Counter extends Component {
    ADD = () => {
        console.log(123)
        store.dispatch(addCount(4))
    }
    MINUS = () => {
        console.log(123)
        store.dispatch(asyncMinusCount(3))
    }
    render () {
        return (
            <div>
                <button onClick={this.ADD}>+</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.MINUS}>-</button>
            </div>
        )
    }
}