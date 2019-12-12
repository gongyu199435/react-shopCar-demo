import React from 'react'
import './App.css'
import Index from './components/redux-shopcar/Index'
// import Index from './components/react-redux-ShopCar/Index'
// import Index from './components/redux/'
// import Grandfather from './components/grandfather'
// import Index from './components/Style'
// import Index from './components/Brother'
// import Hello from './components/Hello';
// import Function from './components/Function';
// import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      {/* <Hello address="M78星云" skill="α射线" />
      <Function  age={18}/> */}
      {/* <Counter
        initCount={20}
        callback={newCount => {
          console.log('传过来的值是:', newCount)
        }}
      /> */}
      {/* <Index/> */}
      {/* <Index/> */}
      {/* <Grandfather/> */}
      {/* <Index/> */}
      <Index />
    </div>
  )
}

export default App
