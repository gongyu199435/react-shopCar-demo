import { ADD, MINUS } from './reduxTypes'
//同步的加法
export const addCount = payload => {
  return {
    type: ADD,
    payload
  }
}
//同步的减法
export const minusCount = payload => {
  return {
    type: MINUS,
    payload
  }
}
//异步的减法
export const asyncMinusCount = payload => {
  return dispatch => {
    setTimeout(() => {
      dispatch(minusCount(payload))
    }, 1000)
  }
}
