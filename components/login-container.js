import LoginPage from './presentational/login-page';
import { connect } from 'react-redux';
import Actions from '../redux/actions';

function mapStateToProps(state) { //=> 這裡的state應該已經經過reducer處理
    return {
        isFetching: state.isFetching, 
        email: state.email || '', 
        password: state.password || ''
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleAccountValidation: function (email, password) {
            // dispatch(Actions.Fetching());
            dispatch(Actions.Login(email, password))
        }, 

        handleEmailChange: function(e){
            dispatch(Actions.handleLoginEmailChange(e.target.value));
        },

        handlePasswordChange: function(e){
            dispatch(Actions.handleLoginPasswordChange(e.target.value));
        }
    };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginContainer;