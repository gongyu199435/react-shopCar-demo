import React, { Component } from 'react'
import bus from './bus'
export default class Brother2 extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }
    componentDidMount(){
        bus.on('myevents',value=>{
            this.setState(value)
        })
    }
    render () {
        return (
            <div>
                <p>兄弟组件1</p>
        <p>这个大美女是:{this.state.name}</p>
        <p>这个大美女今年{this.state.age}岁</p>
            </div>
        )
    }
}