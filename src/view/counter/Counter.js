import React, { Component } from "react";
import { Button } from "antd";
import { inject, observer } from "mobx-react";
import CounterShow from "./CounterShow";

@inject("counterStore")
class Counter extends Component {
  constructor(props) {
    super(props);
  }
  handleIncrement() {
    this.props.counterStore.Increment();
  }
  handleDecrement() {
    this.props.counterStore.Decrement();
  }
  render() {

    return (
      <>
        <Button onClick={() => this.handleIncrement()}>+</Button>
        <Button onClick={() => this.handleDecrement()}>-</Button>
        <CounterShow/>
      </>
    );
  }
}
export default Counter;
