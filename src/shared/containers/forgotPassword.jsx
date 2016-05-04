import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';
import { sendPasswordReset } from './../reducers/sendPasswordReset';
import { clearFormErrors } from './../reducers/forms';
import React from 'react';
import { ForgotPassword } from './../components';

function mapStateToProps(state) {
    return {
        errors: {
            email: state.forms.get('forgotPassword').get('email')
        }
    }
}

function mapDispatchToProps(dispatch) {
    Actions.clearFormErrors = clearFormErrors;
    Actions.sendPasswordReset = sendPasswordReset;
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)