// import materializeCss from '../public/sass/materialize.scss';
import React from 'react';
import LoginPage from './presentational/login-page'
import LoginContainer from './login-container';
import appStyle from '../public/sass/app.scss';
import ChatContainer from './chat-container'
import { connect } from 'react-redux';
import AppPage from '../constants/app-page';

function basedOnIsLoggedIn(isLoggedIn) {
    if (isLoggedIn)
        return AppPage.Chat;
    return AppPage.Login;
}

function mapStateToProps(state) {
    return {
        // appPage: basedOnIsLoggedIn(state.isLoggedIn)  ==>不會re-render
        appPage: state.isLoggedIn ? AppPage.ChatPage : AppPage.LoginPage
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

function App(props) {
    console.log('props in app:', props);
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
                return <ChatContainer />;
            default:
                return <LoginContainer />;
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;