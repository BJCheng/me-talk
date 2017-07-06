import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { whatsappBen } from './reducers/reducer';

// const store = createStore(whatsappBen);

ReactDOM.render(
    // <Provider store={store}>
        <App />
    // </Provider>,
    ,document.getElementById('root')
);