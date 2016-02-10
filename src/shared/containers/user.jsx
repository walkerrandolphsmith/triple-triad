import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/';

import React from 'react';
import User from './../components/user/user';

class UserContainer extends React.Component {

    render() {
        return (
            <User {...this.props} />
        );
    }
}

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
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
