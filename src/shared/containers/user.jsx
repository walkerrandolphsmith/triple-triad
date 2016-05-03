import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/';
import { signOut } from './../reducers/auth/auth';
import React from 'react';
import { User } from './../components';

function mapStateToProps(state) {
    return {
        id: state.auth.get('user').get('id'),
        username: state.auth.get('user').get('username'),
        verified: state.user.get('user').get('verified'),
        resendingVerificationEmail: state.user.get('resending'),
        verificationEmailSent: state.user.get('resendingSuccess'),
        failedToSendVerificationEmail: state.user.get('resendingFailure')

    }
}

function mapDispatchToProps(dispatch) {
    Actions.signOut = signOut;
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
