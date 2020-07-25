import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from './hoc/Layout/Layout';
import PizzaLayout from './hoc/PizzaLayout/PizzaLayout';
import Auth from './containers/Auth/Auth';
import Dashboard from './containers/Dashboard/Dashboard';
import Menu from './containers/Menu/Menu';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends React.Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }
    render() {
        let routes = (
            <Switch>
                <Route path="/login" component={Auth}/>
                <Route path="/dashboard" component={Menu}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/orders" component={Orders}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/" exact component={Auth}/>

            </Switch>
        );
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/login" component={Auth}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/menu" component={Menu}/>
                    <Route path="/orders" component={Orders}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/" exact component={Dashboard}/>

                </Switch>
            );
        }
        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
