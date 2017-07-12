import React from 'react';
import ChatHeader from './chat-header';
import Messages from './messages';
import SendFooter from './send-footer';
import ChatStyle from './chat.scss';

function Chat() {
    return (
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
                        <SendFooter />
                    </div>
                </div>
            </div>
            <div className="outerRightItem"></div>
        </div>
    );
}

export default Chat;