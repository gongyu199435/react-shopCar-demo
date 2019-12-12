import React,{Component} from 'react'
import Counter from './Counter'
import Show from './Show'

export default  class Index extends Component{
    render(){
        return (
            <div>
                <Counter/>
                <Show/>
            </div>
        )
    }
}