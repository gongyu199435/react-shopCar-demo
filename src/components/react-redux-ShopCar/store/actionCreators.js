import { ADD_GOODS, UPDATE_GOODS, DELETE_GOODS } from './actionTypes'

export const addGoods = goods => {
  return {
    type: ADD_GOODS,
    payload: goods
  }
}

export const updategoods = goods => {
  return {
    type: UPDATE_GOODS,
    payload: goods
  }
}
export const deleteGoods = goods => {
  return {
    type: DELETE_GOODS,
    payload: goods
  }
}
export const asyncdelete = id => {
  return dispatch => {
    setTimeout(() => {
      dispatch(deleteGoods(id))
    }, 1000)
  }
}
