import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Store from './store/Store'
let store = new Store();

ReactDOM.render(
    <>
        <App store={store} />
    </>
    , document.getElementById('root'));