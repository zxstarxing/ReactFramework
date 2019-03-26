import React, { Component } from 'react'
import {
  Form, Button, Card, DatePicker, Input
} from 'antd';

export default class TodoForm extends Component {
  handleAddTodo=()=>{
    
  }
  render() {
    return (
      <Card title="添加待办事项">
        <Form>
          <Form.Item>
            <Input placeholder="输入代办事项" />
          </Form.Item>
          <Form.Item>
            <DatePicker
              showTime
              placeholder="选择时间"
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
