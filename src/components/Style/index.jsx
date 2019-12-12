import React, { Component } from 'react'
import './index.css'
//  let text={
//     color:"red"
// }
export default class Index extends Component {

    // render(){
    //     return(
    //         <div>
    //             <p style={text}>我是一个好人</p>
    //         </div>
    //     )
    // }
    render () {
        return (
            <div>
                <p className="text">我是一个好人</p>
            </div>
        )
    }
}