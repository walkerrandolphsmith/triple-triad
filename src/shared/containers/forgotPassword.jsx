import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendPasswordReset } from '../ducks/sendPasswordReset';
import { clearFormErrors } from '../ducks/forms';
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
    return bindActionCreators({ clearFormErrors, sendPasswordReset }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)