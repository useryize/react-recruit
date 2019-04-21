import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { addGun, removeGun, addGunAsync } from './reducer';
class App extends Component {

    render() {
        const { num, addGun, removeGun, addGunAsync } = this.props;
        return (
            <Fragment>
                <h1>现在有机枪{num}</h1>
                <button onClick={addGun}>添加武器</button>
                <button onClick={removeGun}>减武器</button>
                <button onClick={addGunAsync}>过会再给你</button>
            </Fragment>
        )
    }
}
const mapStatetoProps = (state) => (
    {
        num: state
    }
);
const mapDispatchToProps = { addGun, removeGun, addGunAsync }
// const mapDispatchToProps = (dispatch) => {
//     return { addGun, removeGun, addGunAsync }
// }
export default connect(mapStatetoProps, mapDispatchToProps)(App);