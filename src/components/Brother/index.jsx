import React, { Component } from 'react'
import Brother2 from './brother2'
import Brother1 from './brother1'

export default class Index extends Component {
    render () {
        return (
            <div>
                <Brother1 />
                <hr />
                <Brother2 />
            </div>
        )
    }
}