import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Redirect, NavLink} from 'react-router-dom';
import Auxiliary from '../Auxiliary/Auxiliary';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Button from "../../components/UI/Button/Button";

class Layout extends React.Component {
    state = {
        showSideDrawer: false,
        token: localStorage.getItem('token')
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
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
                {/*<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />*/}
                {
                    this.props.isAuthenticated ?
                        <SideDrawer
                            isAuth={this.props.isAuthenticated}
                            open={this.state.showSideDrawer}
                            closed={this.sideDrawerClosedHandler}/>
                        : null
                }

                <main>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);