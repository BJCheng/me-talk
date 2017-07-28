import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import {lime500, lightGreen500, green500} from 'material-ui/styles/colors';

function SendFooter(props) {
    return (
        <div className="row">
            <form onSubmit={props.handleSendMsg}>
                <div className="col s12 valign-wrapper" style={{ backgroundColor: '#f6f6f6' }}>
                    <div className="input-field" style={{width:'100%'}}>
                        <label htmlFor="message">Enter Message</label>
                        <input type="text" name="message" id="message" onChange={props.handleMsgOnChange} value={props.msgContent} />
                    </div>
                    <FlatButton type="submit" icon={<ContentSend color={green500}/>}></FlatButton>
                </div>
            </form>
        </div>
    );
}

export default SendFooter