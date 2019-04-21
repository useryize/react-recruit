import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import { reducer, addGun, removeGun, addGunAsync } from './reducer';
 
// 按使用compose把中间件与redux调试工具链接
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // window.devToolsExtensino ? window.devToolsExtensino() : f=>f
));

function aaa () {
    ReactDOM.render(<App
        store={store}
        addGun={addGun}
        removeGun={removeGun}
        addGunAsync= {addGunAsync}
    />, document.getElementById('root'));
}

aaa();
store.subscribe(aaa);