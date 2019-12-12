import React, { Component } from 'react'
import bus from './bus'
export default class Brother1 extends Component {
    add=()=>{
        bus.emit('myevents',{name:'王语嫣',age:12})
    }
    render () {
        return (
            <div>
                <p>兄弟组件1</p>
                <button onClick={this.add}>点我向兄弟组件传值</button>
            </div>
        )
    }
}