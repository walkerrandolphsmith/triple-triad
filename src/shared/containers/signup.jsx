import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';

import React from 'react';
import SignUpForm from './../components/signUp/signup';

class SignUp extends React.Component {

    render() {
        return (
            <SignUpForm {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    return {
        errors: {
            username: state.signupForm.get('username'),
            password: state.signupForm.get('password'),
            confirmPassword: state.signupForm.get('confirmPassword'),
            email: state.signupForm.get('email')
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)