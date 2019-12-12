import React, { Component } from 'react'
import { Table, Button, InputNumber,Modal } from "antd";
import { connect } from 'react-redux'
// import store from './store'
import { updategoods, asyncdelete } from './store/actionCreators'
const { confirm } = Modal;
const { Column } = Table;

//导入子组件
class Carlist extends Component {
    // delete = (id) => {
    //     confirm({
    //         title: 'Do you want to delete these items?',
    //         content: 'When clicked the OK button, this dialog will be closed after 1 second',
    //         onOk () {
    //             this.props.delete(id)

    //         },
    //         onCancel () { },
    //     });
    // }
    delete = id => {
        confirm({
            title: "提示",
            content: "确定删除该商品吗?",
            okText: '确定',
            cancelText: '取消',
            onOk: () => {
                this.props.delete(id)
            },
            onCancel () {
            }
        });
    };
    render () {
        return (
            <Table dataSource={this.props.goodslist} pagination={false}>
                <Column title="名称" dataIndex="name" />
                <Column title="图片" dataIndex="url" render={url => {
                    return <img style={{ width: 100, height: 100 }} src={url} alt="" />
                }} />
                <Column title="数量" render={(text, record) => {
                    return <InputNumber min={1} defaultValue={record.num} onChange={(num) => { this.props.update(record.id, num) }} />
                }} />
                <Column title="名称" dataIndex="price" render={price => {
                    return <span>{price}</span>
                }} />
                <Column title="总价" render={(text, record) => {
                    return <span>{record.price * record.num}</span>
                }} />
                <Column title="操作" dataIndex="id" render={(id) => {
                    return <Button type="danger" onClick={() => { this.delete(id) }}>删除</Button>
                }} />
            </Table>
        )
    }
}
const mapStatetoProps = state => {
    state.forEach(item => {
        item.key = item.id
    })
    return {
        goodslist: state
    }

}
const mapDispatchtoProps = (dispatch) => {
    return {
        update: function (id, num) {
            dispatch(updategoods({ id, num }))
        },
        delete (id) {
            dispatch(asyncdelete(id))
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Carlist) 