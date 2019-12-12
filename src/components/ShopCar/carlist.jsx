import React, { Component } from 'react'
import { Table, Button, InputNumber } from "antd";
import store from './store'
import { updategoods } from './store/actionCreators'
const { Column } = Table;

//导入子组件
export default class Carlist extends Component {
    constructor() {
        super()
        let list = store.getState()
        list.forEach(item => {
            item.key = item.id
        })
        this.state = {
            data: list
        }

    }
    componentDidMount () {
        store.subscribe(() => {
            let list = store.getState()
            list.forEach(item => {
                item.key = item.id
            })
            this.setState({
                data: list
            })

        })

    }
    upDate = (id, num) => {
        console.log(id, num)
        store.dispatch(updategoods({ id, num }))
    }
    render () {
        const { data } = this.state
        return (
            <Table dataSource={data} pagination={false}>
                <Column title="名称" dataIndex="name" />
                <Column title="图片" dataIndex="url" render={url => {
                    return <img style={{ width: 100, height: 100 }} src={url} alt="" />
                }} />
                <Column title="数量" render={(text, record) => {
                    return <InputNumber min={1} defaultValue={record.num} onChange={(num) => { this.upDate(record.id,num) }} />
                }} />
                <Column title="名称" dataIndex="price" render={price => {
                    return <span>{price}</span>
                }} />
                <Column title="总价" render={(text, record) => {
                    return <span>{record.price * record.num}</span>
                }} />
                <Column title="操作" render={(id) => {
                    return <Button type="danger">删除</Button>
                }} />
            </Table>
        )
    }
}