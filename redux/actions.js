import ActionType from '../constants/action-type';
import $ from 'jquery';

function VerifyAccount(email, password) {
    return function (dispatch) {
        $.ajax({
            url: window.___apiUrl___ + '/verify',
            data: { email, password },
            success: function (result) {
                console.log('account verified, namespace returned:', result);
                dispatch(Login(result))
            },
            error: function (err) {
                console.error(err.responseText);
            }
        });
    }
}

function Login(namespace) {
    return {
        type: ActionType.Login, 
        namespace: namespace
    };
}

export default {
    VerifyAccount,

    Login,

    ReceiveConfirmedFromServer: function () {
        return {
            type: ActionType.ReceiveConfirmedFromServer
        }
    },

    Fetching: function () {
        return {
            type: ActionType.Fetching
        }
    },

    HandleMsgOnChange: function (msgContent) {
        return {
            type: ActionType.HandleMsgOnChange,
            msgContent: msgContent
        }
    },

    ClearMsgContent: function () {
        return {
            type: ActionType.ClearMsgContent
        }
    },

    handleLoginEmailChange: function (email) {
        return {
            type: ActionType.HandleLoginEmailChange,
            email: email
        };
    },

    handleLoginPasswordChange: function (password) {
        return {
            type: ActionType.HandleLoginPasswordChange,
            password: password
        };
    },

    AppendRemoteMsg: function (msg) {
        return {
            type: ActionType.AppendRemoteMsg,
            msg: msg
        };
    },

    AppendLocalMsg: function (msg) {
        return {
            type: ActionType.AppendLocalMsg,
            msg: msg
        };
    },

    UpdateMsgId: function (newMsg) {
        return {
            type: ActionType.UpdateMsgId,
            newMsg: newMsg
        }
    }
};