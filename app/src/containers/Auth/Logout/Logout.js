import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from '../../../Store/actions/rootAction';

const Logout = props => {

    const { onLogout } = props
    useEffect(() => {
        onLogout()
    }, [onLogout])

    return (
        <Redirect to='/' />
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);
