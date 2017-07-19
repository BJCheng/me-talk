import React from 'react';
import ChatHeader from './chat-header';
import Messages from './messages';
import SendFooter from './send-footer';
import ChatStyle from './chat.scss';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import DraftsIcon from 'material-ui-icons/Drafts';
import Divider from 'material-ui/Divider';

function Chat(props) {
    return (
        <div>
             <Drawer open={props.isLoggedIn} width='15%'>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
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
                            <SendFooter />
                        </div>
                    </div>
                </div>
                <div className="outerRightItem"></div>
            </div>
        </div>
    );
}

export default Chat;