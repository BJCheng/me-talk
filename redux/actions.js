import ActionType from '../constants/action-type';

export default {
    Login: function(email, password){
        return {
            type: ActionType.Login, 
            email: email, 
            password: password
        };
    }, 

    ReceiveConfirmedFromServer: function(){
        return {
            type: ActionType.ReceiveConfirmedFromServer
        }
    },

    Fetching: function(){
        return {
            type: ActionType.Fetching
        }
    }, 

    HandleMsgOnChange: function(msgContent){
        return {
            type: ActionType.HandleMsgOnChange, 
            msgContent: msgContent
        }
    }, 

    ClearMsgContent: function(){
        return {
            type: ActionType.ClearMsgContent
        }
    }, 

    handleLoginEmailChange: function(email){
        return {
            type: ActionType.HandleLoginEmailChange, 
            email: email
        };
    },

    handleLoginPasswordChange: function(password){
        return {
            type: ActionType.HandleLoginPasswordChange, 
            password: password
        };
    }
};