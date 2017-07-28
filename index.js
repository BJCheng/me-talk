import React from 'react';
import ReactDOM from 'react-dom';
import AppContanier from './components/app-container';
import ChatContainer from './components/chat-container';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

var preloadedState = {
    isFetching: false,
    isLoggedIn: false, 
    msgContent: ''
}
const store = createStore(reducer, preloadedState);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={AppContanier} />
                    <Route path="/chat/:namespace" component={ChatContainer} />
                </Switch>
            </Router>
            {/* <AppContanier /> */}
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);