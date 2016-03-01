import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';

import React from 'react';
import { SignIn } from './../components';

class SignInContainer extends React.Component {

    render() {
        return (
            <SignIn {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    return {
        errors: {
            username: state.signinForm.get('username'),
            password: state.signinForm.get('password')
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)