import React, { Component } from 'react';

import bus from './bus'

export class Brother2 extends Component {
    constructor(){
        super()

        this.state = {
            name:'',
            age:''
        }
    }

    // vue mounted
    componentDidMount() {
        bus.on('myEvent',data => {
            // console.log(data)
            this.setState(data)
        })
    }

    render() {
        return (
            <div>
                <p>兄弟2：</p>
                <p>坏人的姓名是:{this.state.name}</p>
                <p>坏人的年龄是:{this.state.age}</p>
            </div>
        );
    }
}

export default Brother2;
