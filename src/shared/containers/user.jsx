import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/';
import { signOut } from './../reducers/auth/auth';
import { resendEmailVerification } from './../reducers/resendVerificationEmail';
import React from 'react';
import { User } from './../components';

function mapStateToProps(state) {
    return {
        id: state.auth.get('user').get('id'),
        username: state.auth.get('user').get('username'),
        verified: state.user.get('user').get('verified'),
        resendingVerificationEmail: state.resendEmailVerification.get('loading'),
        verificationEmailSent: state.resendEmailVerification.get('loaded'),
        failedToSendVerificationEmail: state.resendEmailVerification.get('failed')

    }
}

function mapDispatchToProps(dispatch) {
    Actions.signOut = signOut;
    Actions.resendEmailVerification = resendEmailVerification;
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
