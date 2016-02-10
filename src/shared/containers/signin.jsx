import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';

import React from 'react';
import SignInForm from './../components/signIn/SignIn';

class SignIn extends React.Component {

    render() {
        return (
            <SignInForm {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)