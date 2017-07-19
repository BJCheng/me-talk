import React from 'react';

function ChatHeader(props={chatPal:{name:'Test Name', lastSendTime:'1/7/2017'}}){
    return (
        <div className="row" style={{backgroundColor:'#f6f6f6', padding:'8px'}}>
            <div className="col s2 center-align">
                <img src="public/images/user.png" style={{width: 36}}/> {/*set a 42px wide box*/}
            </div>
            <div className="col s10">
                <div className="row">姓名</div>
                <div className="row">時間</div>
                {/*<p>{props.chatPal.name}</p>
                <p>{props.chatPal.lastSendTime}</p>*/}
            </div>
        </div>

    );
}

export default ChatHeader;