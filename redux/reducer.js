import ActionType from '../constants/action-type';

function reducer(state, action){
    Object.freeze(state);
    switch (action.type){
        case ActionType.Login:
            return Object.assign({}, state, {isLoggedIn: true, userId: 2});
        default: 
            return Object.assign({}, state, {isLoggedIn: false, userId: 1});
    }
}

export default reducer;