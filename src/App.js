import React, { Component, Fragment } from 'react';

class App extends Component {

    render() {
        const { store, addGun, removeGun, addGunAsync } = this.props;
        const num = store.getState();
        console.log(store);
        return (
            <Fragment>
                <h1>现在有机枪{num}</h1>
                <button onClick={() => {store.dispatch(addGun())}}>添加武器</button>
                <button onClick={() => {store.dispatch(removeGun())}}>减武器</button>
                <button onClick={() => {store.dispatch(addGunAsync())}}>过会再给你</button>
            </Fragment>
        )
    }
}

export default App;