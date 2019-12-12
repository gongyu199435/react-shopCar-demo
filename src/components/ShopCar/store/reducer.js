import { ADD_GOODS, UPDATE_GOODS } from './actionTypes'
export default (state = [], action) => {
  switch (action.type) {
    case ADD_GOODS:
      const Oldgoodlist = JSON.parse(JSON.stringify(state))
      const Oldgoods = Oldgoodlist.find(item => item.id === action.payload.id)
      if (Oldgoods) {
        Oldgoods.num += action.payload.num
      } else {
        Oldgoodlist.push(action.payload)
      }
      return Oldgoodlist
    case UPDATE_GOODS:
      const oldUpdateList = JSON.parse(JSON.stringify(state))

      // es6数组的方法，找到要修改的商品对象
      const updateGoods = oldUpdateList.find(
        item => item.id === action.payload.id
      )
      updateGoods.num = action.payload.num

      return oldUpdateList //这个新方法会根据find查找出的那一个对象, 如果更改了那个对象, 源数组也会更改
    default:
      return state
  }
}
