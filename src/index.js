import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import App from './App';
import { reducer } from './reducer';

// 按使用compose把中间件与redux调试工具链接
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // window.devToolsExtensino ? window.devToolsExtensino() : f=>f
));

let  Component1 = () => (
    <div>组件二</div>
);
let Component2 = () => (
    <div>组件三</div>
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ul>
                <li><Link to='/'>组件一</Link></li>
                <li><Link to='/Component1'>组件二</Link></li>
                <li><Link to='/Component2'>组件三</Link></li>
            </ul>
            <Route path='/' exact component={App}></Route>
            <Route path='/Component1' component={Component1}></Route>
            <Route path='/Component2' component={Component2}></Route>
        </BrowserRouter>
        {/* <App ></App> */}
    </Provider>,
    document.getElementById('root')
);