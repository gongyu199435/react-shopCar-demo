import React, { Component } from 'react'

import Context from './context'
import Son from './son'
export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            currentColor: "pink"
        }
    }
    ToGreen = () => {
        this.setState({
            currentColor: "green"
        })
    }
    ToRed = () => {
        this.setState({
            currentColor: "red"
        })
    }
    render () {
        return (
            <div>
                <button onClick={this.ToGreen}>绿色</button> &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.ToRed}>红色</button>
                <p style={{ color: this.state.currentColor }}>这是爷爷</p>
                <Context.Provider value={this.state.currentColor} >
                    <Son />
                </Context.Provider>

            </div>
        )
    }
}