import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';

import React from 'react';
import { ForgotPassword } from './../components';

function mapStateToProps(state) {
    return {
        errors: {
            email: state.forgotPasswordForm.get('email')
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)