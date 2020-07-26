import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from './hoc/Layout/Layout';
import PizzaLayout from './hoc/PizzaLayout/PizzaLayout';
import Auth from './containers/Auth/Auth';
import Menu from './containers/Menu/Menu';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';
import PrivateRoute from './containers/PrivateRoute/PrivateRoute';
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
                <Route path="/logout" component={Logout}/>
                <PrivateRoute path='/checkout' component={Checkout} />
                <PrivateRoute path='/orders' component={Orders} />
                <PrivateRoute path='/menu' component={Menu} />
                <PrivateRoute path='/' component={Menu} />

            </Switch>
        );
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
