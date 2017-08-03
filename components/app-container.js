// import materializeCss from '../public/sass/materialize.scss';
import React from 'react';
import LoginPage from './presentational/login-page'
import LoginContainer from './login-container';
import appStyle from './app.scss';
import ChatContainer from './chat-container'
import { connect } from 'react-redux';
import AppPage from '../constants/app-page';

function mapStateToProps(state) {
    return {
        appPage: state.isLoggedIn ? AppPage.ChatPage : AppPage.LoginPage, 
        namespace: state.namespace
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

function App(props) {
    return (
        <div>
            {renderLayout(props)}
        </div>
    );

    function renderLayout(props) {
        switch (props.appPage) {
            case AppPage.LoginPage:
                return <LoginContainer />;
            case AppPage.ChatPage:
                return <ChatContainer namespace={props.namespace}/>;
            default:
                return <LoginContainer />;
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;