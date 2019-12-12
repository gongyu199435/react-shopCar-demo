import React from 'react';
import propTypes from 'prop-types';

function Function ({ name, age }) {
    return (
        <div>这是一个函数组件{name}--{age}</div>
    )


}
Function.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired
}
Function.defaultProps={
    name:'混元霹雳手--成昆'
}
export default Function