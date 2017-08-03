import ActionType from '../constants/action-type';
import io from 'socket.io-client';

//preloadedState defined in index.js and pass into createStore as the second argument
function reducer(state, action) {
    Object.freeze(state);

    let msg;
    let msgs;
    switch (action.type) {
        case ActionType.Login:
            return Object.assign({}, state, { isLoggedIn: true, isFetching: false, namespace: action.namespace });

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
            return Object.assign({}, state, { msgContent: '' });

        case ActionType.HandleLoginEmailChange:
            return Object.assign({}, state, { email: action.email });

        case ActionType.HandleLoginPasswordChange:
            return Object.assign({}, state, { password: action.password });

        case ActionType.AppendRemoteMsg:
            msg = action.msg;
            msgs = [...state.msgs, msg];
            return Object.assign({}, state, { msgs: msgs });

        case ActionType.AppendLocalMsg:
            msg = action.msg;
            msgs = [...state.msgs, msg];
            return Object.assign({}, state, { msgs: msgs });

        case ActionType.UpdateMsgId:
            let newMsg = action.newMsg;
            let newMsgs = state.msgs.map((msg)=>{
                if(msg.tempId == newMsg.tempId){
                    return Object.assign(msg, newMsg);
                }
                return msg;
            });
            return Object.assign({}, state, {msgs: newMsgs});

        default:
            return Object.assign({}, state);
    }
}

export default reducer;