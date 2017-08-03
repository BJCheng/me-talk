import React from 'react';
import ReactDOM from 'react-dom';
import AppContanier from './components/app-container';
import ChatContainer from './components/chat-container';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducer';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

var preloadedState = {
    isFetching: false,
    isLoggedIn: false, 
    msgContent: '',
    msgs: [{id: '1', content:'1', isMine: true, time: new Date()},{id: '2', content:'2', isMine: false, time: new Date()}]
}
const store = createStore(reducer, preloadedState, applyMiddleware(reduxThunk));

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