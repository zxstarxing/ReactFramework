import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import Store from './stores/Store'

import Todo from './view/todo/todo';
import Index from './view/Index';
import TodoForm from './view/todo/TodoForm';

import RouterVar from './contants/Router'

let store = new Store();
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
console.log(RouterVar);

ReactDOM.render(
    <Router>
        <App store={store} >
            <Route exact path={RouterVar.Home} component={Index} />
            <Route exact path={RouterVar.TodoRouter.TODO} component={Todo}></Route>
            <Route path={RouterVar.TodoRouter.TODOADD} component={TodoForm}></Route>
        </App>
    </Router>
    , document.getElementById('root'));