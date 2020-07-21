import React, {Component} from 'react';
import {connect} from 'react-redux';

// import SiteLogo from '../../assets/images/logo.png';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import SiteLogo from "../../assets/images/logo.png";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

class Dashboard extends Component {
    dashboardHandler = () => {
        //this.props.history.push('/dashboard');
        //this.props.history.goBack();
        console.log('dashboard')
        this.props.history.push('/dashboard');
    }
    loginHandler = () => {
        console.log('login')
        //this.props.history.push('/dashboard');
        //this.props.history.goBack();
        this.props.history.push('/login');
    }
    logoutHandler = () => {
        console.log('logout')
        //this.props.history.push('/dashboard');
        //this.props.history.goBack();
        this.props.history.push('/logout');
    }

    render() {
        return (
            <Auxiliary>
                <h1>I am dashboard</h1>
                <Button btnType="Success" clicked={this.dashboardHandler}>Dashboard</Button>
                <Button btnType="Success" clicked={this.loginHandler}>Login</Button>
                <Button btnType="Success" clicked={this.logoutHandler}>Lgout</Button>
            </Auxiliary>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/dashboard'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
