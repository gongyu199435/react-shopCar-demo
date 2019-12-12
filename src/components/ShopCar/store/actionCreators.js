import { ADD_GOODS,UPDATE_GOODS } from './actionTypes'

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
