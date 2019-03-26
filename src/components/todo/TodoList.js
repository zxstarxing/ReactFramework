import React, { Component } from 'react';
import { Table,Button } from 'antd';

export default class TodoList extends Component {
  render() {
    const columns = [
      {
        title: '代办事项', dataIndex: 'todoName', key: 'todoName'
      },
      {
        title: '添加时间', dataIndex: 'addTime', key: 'addTime'
      },
      {
        title: 'Action',
        key: 'operation',
        render: () =>(
          <>
            <Button type="info">编辑</Button>
            <Button type="danger">删除</Button>
          </>
        ),
      },
    ];
    const data = [{
      key: '1',
      todoName: '吃饭饭',
      addTime: '2019-03-26 17:00',
    }, {
      key: '2',
      todoName: '洗澡澡',
      addTime: '2019-03-26 18:00',
    }];
    return (
      <Table columns={columns} dataSource={data} width={{ width: '100%' }} />
    )
  }
}
