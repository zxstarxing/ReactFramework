import React, { Component } from "react";
import { Table, Button } from "antd";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({ data: this.props.todoStore.List });
  }
  render() {
    const columns = [
      {
        title: "代办事项",
        dataIndex: "todoName",
        key: "todoName"
      },
      {
        title: "添加时间",
        dataIndex: "addTime",
        key: "addTime"
      },
      {
        title: "Action",
        key: "operation",
        render: () => (
          <>
            <Button type="info">编辑</Button>
            <Button type="danger">删除</Button>
          </>
        )
      }
    ];
    return (
      <Table
        columns={columns}
        dataSource={this.state.data}
        width={{ width: "100%" }}
      />
    );
  }
}

export default TodoList;
