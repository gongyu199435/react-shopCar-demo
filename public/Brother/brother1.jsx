import React, { Component } from 'react';

import bus from './bus'

export class Brother1 extends Component {
    sendValueToBrother2 = () => {
        // 触发自定义事件，传值
        bus.emit('myEvent',{name:'尹志平',age:30})
    }

    render() {
        return (
            <div>
                <p>兄弟1：</p>
                <button onClick={this.sendValueToBrother2}>传值给兄弟2</button>
            </div>
        );
    }
}

export default Brother1;
