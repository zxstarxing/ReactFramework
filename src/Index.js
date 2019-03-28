import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import Store from './stores/Store'
import TodoStore from './stores/TodoStore'
import { LocaleProvider } from 'antd';

import Todo from './view/todo/todo';
import Index from './view/Index';
import TodoForm from './view/todo/TodoForm';

import RouterVar from './contants/Router'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { Provider } from 'mobx-react';

let store = new Store();
let todoStore = new TodoStore();
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
console.log(RouterVar);

ReactDOM.render(
    <Provider  store={store} todoStore={todoStore}>
        <Router>
            <LocaleProvider locale={zh_CN}>
                <App>
                    <Route exact path={RouterVar.Home} component={Index} />
                    <Route exact path={RouterVar.TodoRouter.TODO} component={Todo}></Route>
                    <Route path={RouterVar.TodoRouter.TODOADD} component={TodoForm}></Route>
                </App>
            </LocaleProvider>
        </Router>
    </Provider>
    , document.getElementById('root'));