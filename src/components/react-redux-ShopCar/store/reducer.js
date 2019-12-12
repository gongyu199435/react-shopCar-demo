import { ADD_GOODS, UPDATE_GOODS, DELETE_GOODS } from './actionTypes'
// if (JSON.parse(window.localStorage.getItem('goodlist')) === undefined) {
//   return
// }
let goodlist = JSON.parse(window.localStorage.getItem('goodlist') || '[]')
export default (state = goodlist, action) => {
  switch (action.type) {
    // 加入购物车
    case ADD_GOODS:
      const Oldgoodlist = JSON.parse(JSON.stringify(state))
      const Oldgoods = Oldgoodlist.find(item => item.id === action.payload.id)
      if (Oldgoods) {
        Oldgoods.num += action.payload.num
      } else {
        Oldgoodlist.push(action.payload)
      }
      return Oldgoodlist
    // 更新商品数量
    case UPDATE_GOODS:
      const oldUpdateList = JSON.parse(JSON.stringify(state))

      // es6数组的方法，找到要修改的商品对象
      const updateGoods = oldUpdateList.find(
        item => item.id === action.payload.id
      )
      updateGoods.num = action.payload.num

      return oldUpdateList //这个新方法会根据find查找出的那一个对象, 如果更改了那个对象, 源数组也会更改
    // 删除商品
    case DELETE_GOODS:
      const deletedList = JSON.parse(JSON.stringify(state))

      // es6数组的方法，找到要修改的商品对象
      const GoodsIndex = deletedList.findIndex(
        item => item.id === action.payload
      )
      deletedList.splice(GoodsIndex, 1)

      return deletedList //这个新方法会根据find查找出的那一个对象, 如果更改了那个对象, 源数组也会更改

    default:
      return state
  }
}
