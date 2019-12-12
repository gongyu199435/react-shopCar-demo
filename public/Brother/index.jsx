import React, { Component } from 'react';

import Brother1 from './brother1'
import Brother2 from './brother2'

class Index extends Component {
    render() {
        return (
            <div>
                <Brother1 />
                <hr/>
                <Brother2 />
            </div>
        );
    }
}

export default Index;