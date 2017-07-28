import { connect } from 'react-redux';
import chat from './presentational/chat';
import Actions from '../redux/actions';

function mapStateToProps(state, ownProps) {
    return {
        isLoggedIn: state.isLoggedIn, 
        myNamespace: 'lpaben62', 
        theOtherNamespace: 'un-1', //==>對談者的namespace應該是註冊的人點選要跟誰交談以後才知道的
        msgContent: state.msgContent //for send-footer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchReceiveMsg: function () {
            dispatch(Actions.ReceiveConfirmedFromServer());
        }, 
        handleMsgOnChange: function(e){
            dispatch(Actions.HandleMsgOnChange(e.target.value));
        }, 
        clearMsgContent: function(){
            dispatch(Actions.ClearMsgContent());
        }
    };
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(chat);

export default ChatContainer;