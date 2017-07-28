import React from 'react';
import ChatHeader from './chat-header';
import Messages from './messages';
import SendFooter from './send-footer';
import ChatStyle from './chat.scss';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import io from 'socket.io-client';

class Chat extends React.Component {
    constructor() {
        super();
        this.handleSendMsg = this.handleSendMsg.bind(this);
    }

    componentWillMount() {
        //1. 開我的namespace的socket
        //我從超連結打開的話我的namespace就從query string來
        //我從登入畫面登入進來的話我的namespace就從使用者輸入的email來
        const myNamespace = (this.props.match) ? this.props.match.params.namespace : this.props.myNamespace;
        const theOtherNamespace = myNamespace.startsWith('un-') ? '' : this.props.theOtherNamespace;
        this.myNamespace = myNamespace;
        this.theOtherNamespace = theOtherNamespace;
        const socket = io(`/${this.myNamespace}`);
        this.chatSocket = socket;
        let { dispatchReceiveMsg } = this.props;  //=>cannot access this.props within from-server event.
        socket.on('from-server', function (data) {
            console.log('someone send you:', data);
            //1. 如果傳訊息給我的人是我正在交談的對象，就更新聊天室的內容
            // dispatchReceiveMsg();
            //2. 如果傳訊息給我的人不是我正在交談的對象，就更新左邊的聊天室介面，增加未讀數並且按照訊息傳送時間排序
        })
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        this.chatSocket.disconnect()
    }

    render() {
        // console.log('render');
        return (
            <div style={{ height: '100%' }}>
                <Drawer open={this.props.isLoggedIn} width='15%'>
                    <MenuItem>Actions</MenuItem>
                    <MenuItem>Chatters</MenuItem>
                </Drawer>

                <div className="chat outerContainer">
                    <div className="outerLeftItem"></div>

                    <div className="outerItem">
                        <div className="innerContainer">
                            <div className="innerItemHeader">
                                <ChatHeader chatPal={{ name: 'test', lastSendTime: '123' }} />
                            </div>
                            <div className="innerItemMessages">
                                <Messages />
                            </div>
                            <div className="innerItemFooter">
                                <SendFooter handleSendMsg={this.handleSendMsg} handleMsgOnChange={this.props.handleMsgOnChange}
                                    msgContent={this.props.msgContent} />
                            </div>
                        </div>
                    </div>

                    <div className="outerRightItem"></div>
                </div>
            </div>
        );
    }

    handleSendMsg(e) {
        e.preventDefault();
        if (!this.props.msgContent) {
            return;
        }
        //get the message content
        //generate message with 1.id 2.receiving namespace
        //append messsage
        //dispatch sending action and inticating it's waiting for server
        console.log('this.theOtherNamespace after handleSendMsg', this.theOtherNamespace);
        this.chatSocket.emit('client-send', { msg: this.props.msgContent, theOther: this.theOtherNamespace });
        this.props.clearMsgContent();
    }
}

export default Chat;