import React from 'react';
import ReactDOM from 'react-dom';
import AppContanier from './components/app-container';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <AppContanier />
    </Provider>,
    document.getElementById('root')
);