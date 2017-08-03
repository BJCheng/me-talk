import { connect } from 'react-redux';
import chat from './presentational/chat';
import Actions from '../redux/actions';

function mapStateToProps(state, ownProps) {
    return {
        isLoggedIn: state.isLoggedIn, 
        myNamespace: ownProps.namespace, 
        theOtherNamespace: '185ba8ce-e82c-40ed-8379-66ac9adbf659', //==>預設是null，等到點選與誰對談後才會知道
        msgContent: state.msgContent, //for send-footer
        msgs: state.msgs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // for syncing footer
        handleMsgOnChange: function(e){
            dispatch(Actions.HandleMsgOnChange(e.target.value));
        }, 

        dispatchReceiveMsg: function (msg) {
            dispatch(Actions.AppendRemoteMsg(msg));
            // dispatch(Actions.ReceiveConfirmedFromServer());
        }, 

        dispatchSendMsg: function (msg) {
            dispatch(Actions.AppendLocalMsg(msg));
            // dispatch(Actions.SendMsgToServer(msg));
            // dispatch(Actions.ReceiveConfirmedFromServer());
        }, 

        clearMsgContent: function(){
            dispatch(Actions.ClearMsgContent());
        }, 

        //append server returned id on message
        dispatchUpdateMsgId: function(newMsg){
            dispatch(Actions.UpdateMsgId(newMsg));
        }
    };
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(chat);

export default ChatContainer;