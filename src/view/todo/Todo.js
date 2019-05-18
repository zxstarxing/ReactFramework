import React, { Component } from "react";
import { Card, Button } from "antd";
import TodoList from "../../components/todo/TodoList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoRouter from "../../contants/TodoRouter";
import CounterShow from "../counter/CounterShow";
import { inject, observer } from "mobx-react";

@inject("counterStore")
@observer
class Todo extends Component {
  constructor(props) {
    super(props);
  }
  handleAddTodo = () => {
    this.props.history.push({ pathname: TodoRouter.TODOADD });
  };
  render() {
    let AddButton = (
      <Button type="primary" onClick={() => this.handleAddTodo()}>
        新增代办事项
      </Button>
    );
    return (
      <>
        {this.props.counterStore.CountTodoShowProperty}
        <Card extra={AddButton}>
          <TodoList />
        </Card>
      </>
    );
  }
}

export default Todo;
