import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/';
import { signOut } from './../reducers/auth';
import { resendEmailVerification } from './../reducers/resendVerificationEmail';
import React from 'react';
import { User } from './../components';

function mapStateToProps(state) {
    return {
        id: state.auth.get('user').get('id'),
        username: state.auth.get('user').get('username'),
        email: state.user.get('user').get('email'),
        verified: state.user.get('user').get('verified'),
        resendingVerificationEmail: state.resendVerificationEmail.get('loading'),
        verificationEmailSent: state.resendVerificationEmail.get('loaded'),
        failedToSendVerificationEmail: state.resendVerificationEmail.get('failed')

    }
}

function mapDispatchToProps(dispatch) {
    Actions.signOut = signOut;
    Actions.resendVerificationEmail = resendEmailVerification;
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
