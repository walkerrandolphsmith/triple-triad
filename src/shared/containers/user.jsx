import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { User } from './../components';
import { signOut } from '../ducks/auth';
import { resendEmailVerification } from '../ducks/resendVerificationEmail';

function mapStateToProps(state) {
    return {
        id: state.auth.get('user').get('id'),
        username: state.auth.get('user').get('username'),
        email: state.auth.get('user').get('email'),
        verified: state.auth.get('user').get('isVerified'),
        resendingVerificationEmail: state.resendVerificationEmail.get('loading'),
        verificationEmailSent: state.resendVerificationEmail.get('loaded'),
        failedToSendVerificationEmail: state.resendVerificationEmail.get('failed')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signOut, resendEmailVerification }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
