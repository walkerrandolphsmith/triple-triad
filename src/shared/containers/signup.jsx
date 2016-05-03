import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearFormErrors } from './../reducers/forms';
import { signUp } from './../reducers/auth/auth';

import React from 'react';
import { SignUp } from './../components';

function mapStateToProps(state) {
    return {
        errors: {
            username: state.forms.get('signUp').get('username'),
            password: state.forms.get('signUp').get('password'),
            confirmPassword: state.forms.get('signUp').get('confirmPassword'),
            email: state.forms.get('signUp').get('email')
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({clearFormErrors, signUp},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)