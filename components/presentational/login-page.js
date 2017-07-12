import React from 'react';
import loginPageStyle from './login-page.scss';

function LoginPage(props) {
    return (
        <div className="login-box valign-wrapper row">
            <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                <form onSubmit={props.handleLoginSubmit}>
                    <div className="card-content">
                        <div className="row valign-wrapper">
                            <div className="col-3">
                                <img src="public/images/windows-notification-icon.png" style={{ width: 36 }} />
                            </div>
                            <div className="col-9">
                                <span className="card-title" style={{ color: '#137566' }}> WhatsappBen{props.test}</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="validate" name="email" id="email" />
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="password">Password </label>
                                <input type="password" className="validate" name="password" id="password" />
                            </div>
                        </div>
                    </div>
                    <div className="card-action right-align">
                        <button type="reset" id="reset" className="btn-flat grey-text waves-effect">reset</button>
                        <button type="submit" className="btn green waves-effect waves-light">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;