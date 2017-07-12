import {connect} from 'react-redux';
import chat from './presentational/chat';

function mapStateToProps(state){
    return {};
}

function mapDispatchToProps(dispatch){
    return {};
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(chat);

export default ChatContainer;