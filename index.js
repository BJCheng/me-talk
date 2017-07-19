import React from 'react';
import ReactDOM from 'react-dom';
import AppContanier from './components/app-container';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { MuiThemeProvider } from 'material-ui/styles';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <AppContanier />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);