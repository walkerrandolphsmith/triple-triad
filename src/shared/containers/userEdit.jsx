import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserEdit } from './../components';
import { signOut, deleteUser, updateAvatar } from '../ducks/auth';
import { resendEmailVerification } from '../ducks/resendVerificationEmail';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
    const { id, username, email, avatar } = state.auth.get('user');
    return {
        id, username, email, avatar
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signOut, deleteUser, updateAvatar, resendEmailVerification, push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
