import { ADD_GOODS } from './actionTypes'

export const addgoods = goods => {
  return {
    type: ADD_GOODS,
    payload: goods
  }
}
