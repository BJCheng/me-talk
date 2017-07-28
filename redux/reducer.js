import ActionType from '../constants/action-type';
import io from 'socket.io-client';

//preloadedState defined in index.js and pass into createStore as the second argument
function reducer(state, action) {
    Object.freeze(state);

    switch (action.type) {
        case ActionType.Login:
            //perform async validation
            let email = action.email;
            let password = action.password;
            // return function (dispatch) {

            // };
            return Object.assign({}, state, { isLoggedIn: true, isFetching: false });

        case ActionType.ReceiveConfirmedFromServer:
            let msgObject = {
                messages: [{
                    msgId: '123',
                    serverReceived: true
                }]
            };
            return Object.assign({}, state, msgObject);

        case ActionType.Fetching:
            return Object.assign({}, state, { isFetching: true });

        case ActionType.HandleMsgOnChange:
            return Object.assign({}, state, { msgContent: action.msgContent });

        case ActionType.ClearMsgContent:
            return Object.assign({}, state, {msgContent: ''});

        case ActionType.HandleLoginEmailChange:
            return Object.assign({}, state, { email: action.email });

        case ActionType.HandleLoginPasswordChange:
            return Object.assign({}, state, { password: action.password });

        default:
            return Object.assign({}, state);
    }
}

export default reducer;