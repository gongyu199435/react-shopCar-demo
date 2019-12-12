import React, { Component } from 'react'
import Context from './context'
export default class Son extends Component {
    render () {
        return (
            <div>
                <Context.Consumer>
                    {
                        value=>{
                            return (
                                <p style={{color:value}}>我是儿子奥</p>
                            )
                        }
                    }
                </Context.Consumer>
            </div>
        )
    }
}