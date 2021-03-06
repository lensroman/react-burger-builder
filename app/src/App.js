import React, {useEffect} from 'react';

import {Redirect, Route, Switch} from "react-router-dom";
import {withRouter} from "react-router-dom";

import {connect} from "react-redux";
import * as actions from './Store/actions/rootAction';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from './containers/Auth/Auth';
import Logout from "./containers/Auth/Logout/Logout";

const App = props => {

    const { onTryAutoSignUp } = props
    useEffect(() => {
        onTryAutoSignUp()
    }, [onTryAutoSignUp])

    let routes = (
        <Switch>
            <Route path='/authAction' component={Auth} />
            <Route path='/' component={BurgerBuilder} />
            <Redirect to='/' />
        </Switch>
    );

    if (props.isAuthenticated) {
        routes = (
            <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route path='/authAction' component={Auth} />
                <Route path='/logout' component={Logout} />
                <Route path="/" component={BurgerBuilder} />
                <Redirect to='/' />
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

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheck())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
