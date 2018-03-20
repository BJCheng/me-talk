import React from 'react';
import loginPageStyle from './login-page.scss';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router-dom';
injectTapEventPlugin(); // for button's unknown onTouchTap warning

/*
 * 因為不想用redux-form的關係，這個component自己維護了自己的state，最後再從自己的state裡面取得email與密碼回傳到container的分法
 * 但既然這是一個presentational component，維護自己的state可能不是一個好方法
*/
class LoginPage extends React.Component {
    constructor() {
        super();
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    render() {
        return (
            <div className="login-box valign-wrapper row">
                <div className="col card hoverable s10 pull-s1 m8 pull-m3 l4 pull-l3">
                    <form onSubmit={this.handleLoginSubmit}>
                        <div className="card-content">
                            <div className="row valign-wrapper">
                                <div className="col-3">
                                    <img src="public/images/windows-notification-icon.png" style={{ width: 36 }} />
                                </div>
                                <div className="col-9">
                                    <span className="card-title" style={{ color: '#137566' }}> WhatsappBen</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="validate" name="email" id="email" value={this.props.email} onChange={this.props.handleEmailChange} />
                                </div>
                                <div className="input-field col s12">
                                    <label htmlFor="password">Password </label>
                                    <input type="password" className="validate" name="password" id="password" value={this.props.password} onChange={this.props.handlePasswordChange} />
                                </div>
                            </div>
                        </div>
                        <div className="card-action right-align">
                            <Link to="/chat/185ba8ce-e82c-40ed-8379-66ac9adbf659"><FlatButton label="Go Chat" /></Link>
                            <FlatButton label="reset"></FlatButton>
                            <RaisedButton type="submit" label="Login" style={{ backgroundColor: "#47B04B" }} primary={true}></RaisedButton>
                        </div>
                    </form>
                    <div>
                        <p>{(this.props.isFetching) ? 'Validating...' : ''}</p>
                    </div>
                </div>
            </div>
        );
    }

    //因為container沒辦法access state，所以只好從presentational裡面傳props上去
    handleLoginSubmit(e) {
        e.preventDefault();
        this.props.handleAccountValidation(this.props.email, this.props.password);
    }
}

export default LoginPage;