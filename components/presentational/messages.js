import React from 'react';
import messageStyle from './message-style.scss';

function Messages(props) {
    let msgDivs = props.msgs.map((msg) => {
        msg.time = new Date(msg.time)
        let nameOfClass = 'col s12';
        if (msg.isMine)
            nameOfClass = nameOfClass + ' right-align';
        // let tickClass = 'tickDefault';
        // if (msg.id.length > 0) {
        //     tickClass = 'serverReceived';
        //     if (msg.receiverReceived) {
        //         tickClass += ' receiverReceived';
        //     }
        //     if (msg.receiverRead) {
        //         tickClass += 'receiverRead';
        //     }
        // }
        return (
            <div key={msg.id} className={nameOfClass}>
                <div>
                    <div className="chip">
                        {msg.content}
                        <span>   </span>
                        <span style={{ fontSize: '75%' }}>{`${msg.time.getHours() + 1} : ${msg.time.getMinutes() + 1}`}</span>
                        {/* <img className={tickClass}></img>  */}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="row" style={{ backgroundColor: '#ddd5cd', backgroundImage: 'url(/public/images/chat-background.png)', backgroundSize: 'contain' }}>
            {/*<div className="chat-empty" style={{height:'100%'}}></div>  this div should fill the rest of the height*/}
            {msgDivs}
        </div>
    );
}

export default Messages;