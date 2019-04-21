const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';


export const reducer = (state = 0, action) => {
    if (action.type === '加机关枪') {
        return state+1;
    }
    if (action.type === '减机关枪') {
        return state-1
    }
    return 10;
};



export const addGun = () => {
    return {type: ADD_GUN}
};

export const removeGun= () => {
    return {type: REMOVE_GUN}
};

export const addGunAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun());
        }, 1000);
       
    }
}