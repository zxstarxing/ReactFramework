import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Store from "./stores/Store";
import TodoStore from "./stores/TodoStore";
import CounterStore from "./stores/CounterStore";
import { LocaleProvider } from "antd";

import Todo from "./view/todo/todo";
import Index from "./view/Index";
import TodoForm from "./view/todo/TodoForm";

import RouterVar from "./contants/Router";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import { Provider } from "mobx-react";
import Counter from "./view/counter/Counter.js";

let store = new Store();
let todoStore = new TodoStore();
let counterStore = new CounterStore();
import { BrowserRouter as Router, Route } from "react-router-dom";


ReactDOM.render(
  <Provider store={store} todoStore={todoStore} counterStore={counterStore}>
    <Router>
      <LocaleProvider locale={zh_CN}>
        <App>
          <Route exact path={RouterVar.Home} component={Index} />
          <Route exact path={RouterVar.TodoRouter.TODO} component={Todo} />
          <Route path={RouterVar.TodoRouter.TODOADD} component={TodoForm} />
          <Route path={RouterVar.TodoRouter.TODOEDIT} component={TodoForm} />
          <Route exact path={'/counter'} component={Counter} />
        </App>
      </LocaleProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
