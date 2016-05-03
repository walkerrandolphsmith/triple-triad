import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearFormErrors } from './../actions';
import { signIn } from './../reducers/auth/auth';

import React from 'react';
import { SignIn } from './../components';

function mapStateToProps(state) {
    return {
        errors: {
            username: state.signinForm.get('username'),
            password: state.signinForm.get('password')
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({clearFormErrors, signIn},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)