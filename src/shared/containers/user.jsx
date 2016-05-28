import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { User } from './../components';
import { signOut } from '../ducks/auth';
import { resendEmailVerification } from '../ducks/resendVerificationEmail';
import { push } from 'react-router-redux';
import { getScoresSelector } from '../ducks/auth/selectors';

function mapStateToProps(state) {
    return {
        user: state.auth.get('user'),
        tally: getScoresSelector(state),
        resendingVerificationEmail: state.resendVerificationEmail.get('loading'),
        verificationEmailSent: state.resendVerificationEmail.get('loaded'),
        failedToSendVerificationEmail: state.resendVerificationEmail.get('failed')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signOut, resendEmailVerification, push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
