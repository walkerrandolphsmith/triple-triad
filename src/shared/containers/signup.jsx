import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearFormErrors } from './../actions';
import { signUp } from './../reducers/auth/auth';

import React from 'react';
import { SignUp } from './../components';

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
    return bindActionCreators({clearFormErrors, signUp},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)