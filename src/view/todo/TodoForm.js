import React, { Component } from 'react'
import {
  Form, Button, Card, DatePicker, Input
} from 'antd';

import { observer, inject } from 'mobx-react';

@inject("todoStore")
@observer
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      time: ''
    }
  }
  handleAddTodo = () => {
    this.props.todoStore.Add(this.state);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleOkDatePicker(date, dateString) {
    this.setState({ time: dateString })
  }
  render() {
    console.log(this.props);
    return (
      <Card title="添加待办事项">
        <Form>
          <Form.Item>
            <Input placeholder="输入代办事项" value={this.state.todo} name="todo" onChange={this.handleChange.bind(this)} />
          </Form.Item>
          <Form.Item>
            <DatePicker
              showTime
              placeholder="选择时间"
              onChange={this.handleOkDatePicker.bind(this)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => this.handleAddTodo()} >新增代办事项</Button>
          </Form.Item>
        </Form>
      </Card>

    )
  }
}
export default TodoForm;