import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("counterStore")
@observer
class CounterShow extends Component {
  render() {
    let { CountShowProperty } = this.props.counterStore;
    return <div>{CountShowProperty}</div>;
  }
}
export default CounterShow;
