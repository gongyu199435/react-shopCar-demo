import { ADD_GOODS } from './actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_GOODS:
      const Oldgoodslist = JSON.parse(JSON.stringify(state))
      const Oldgoogs = Oldgoodslist.find(item => item.id === action.payload.id)
      if (Oldgoogs) {
        Oldgoogs.num += action.payload.num
      } else {
        Oldgoodslist.push(action.payload)
      }
      return Oldgoodslist
    default:
      return state
  }
}
