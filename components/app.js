//render login page or chat page
import materializeCss from '../public/sass/materialize.scss';
import React from 'react';
import LoginPage from './presentational/LoginPage'
import appStyle from '../public/sass/app.scss';

function App() {
    return (
        <div style={{height:'100%'}}>
            <LoginPage/>
        </div>
    );
}

export default App;