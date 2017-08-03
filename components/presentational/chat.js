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
        //get namespaces and store it under 'this'
        if (this.props.match) {
            // this.myNamespace = this.props.match.params.namespace;
            this.myNamespace = '185ba8ce-e82c-40ed-8379-66ac9adbf659';
        } else {
            this.myNamespace = this.props.myNamespace;
            this.theOtherNamespace = this.props.theOtherNamespace;
        }

        const socket = io(`/${this.myNamespace}`);
        this.chatSocket = socket;

        //update messages's id
        socket.on('sender-receive', (data) => {
            this.props.dispatchUpdateMsgId(data);
        });

        let { dispatchReceiveMsg } = this.props;  //=>cannot access 「this.props」 within from-server event.
        socket.on('receiver-receive', function (data) {
            console.log('someone send you:', data);
            let msg = Object.assign({}, data, { isMine: false });
            //1. 如果傳訊息給我的人是我正在交談的對象，就更新聊天室的內容
            dispatchReceiveMsg(msg);
            //2. 如果傳訊息給我的人不是我正在交談的對象，就更新左邊的聊天室介面，增加未讀數並且按照訊息傳送時間排序
        });

        //dispatch an action to load the history messages
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        this.chatSocket.disconnect()
    }

    render() {
        console.log('msgs:', this.props.msgs);
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
                                <Messages msgs={this.props.msgs} />
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
        let msg = { 
            id: undefined, 
            tempId: this.props.msgs.length+1, 
            isMine: true, 
            content: this.props.msgContent, 
            time: new Date(), 
            theOther: this.theOtherNamespace 
        };
        this.props.dispatchSendMsg(msg);
        //get the message content
        //generate message with 1.id 2.receiving namespace
        //append messsage
        //dispatch sending action and inticating it's waiting for server
        console.log('this.theOtherNamespace after handleSendMsg', this.theOtherNamespace);
        this.chatSocket.emit('sender-send', msg);
        this.props.clearMsgContent();
    }
}

export default Chat;