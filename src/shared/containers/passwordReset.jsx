import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearFormErrors } from '../ducks/forms';

import React from 'react';
import { PasswordReset } from './../components/smart/passwordReset/passwordReset';

function mapStateToProps(state) {
    return {
        token: state.routing.locationBeforeTransitions.pathname.split('/reset/')[1],
        errors: {
            password: state.forms.get('resetPassword').get('password'),
            confirmPassword: state.forms.get('resetPassword').get('confirmPassword')
        }
    }
}

function mapDispatchToProps(dispatch) {
    Actions.clearFormErrors = clearFormErrors;
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset)