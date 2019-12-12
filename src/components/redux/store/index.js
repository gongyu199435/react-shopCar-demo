import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './Reducer'
import thunk from 'redux-thunk'
//   这个代码是为了完成异步减法 并能观测到redux的值 不清楚的去看文档
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
export default store
