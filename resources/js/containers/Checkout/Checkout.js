import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import CheckoutItems from './CheckoutItems/CheckoutItems';
import MenuItems from "../Menu/MenuItems/MenuItems";
import {NavLink} from "react-router-dom";

class Checkout extends Component {
    checkoutHandler = () => {
        //this.props.history.push('/dashboard');
        //this.props.history.goBack();
        console.log('Checkout');
        this.props.history.push('/checkout');
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
                <section>
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                            <div className="col-md-7 heading-section text-center">
                                <h2 className="mb-4">Chechkout</h2>
                                <p className="flip">
                                    <span className="deg1"></span><span className="deg2"></span><span
                                    className="deg3"></span></p>
                                <p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-8">
                            <CheckoutItems></CheckoutItems>
                        </div>
                    </div>
                </section>
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
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/checkout'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
