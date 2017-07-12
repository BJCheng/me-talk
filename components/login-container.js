import LoginPage from './presentational/login-page';
import { connect } from 'react-redux';
import Actions from '../redux/actions';

function mapStateToProps(state) { //=> 這裡的state應該已經經過reducer處理
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        handleLoginSubmit: function (e) {
            e.preventDefault();
            dispatch(Actions.Login())
        }
    };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginContainer;