import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserEdit } from './../components';
import { signOut, deleteUser, updateAvatar } from '../ducks/auth';
import { resendEmailVerification } from '../ducks/resendVerificationEmail';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
    return {
        id: state.auth.get('user').get('id'),
        username: state.auth.get('user').get('username'),
        email: state.auth.get('user').get('email'),
        avatar: state.auth.get('user').get('avatar')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signOut, deleteUser, updateAvatar, resendEmailVerification, push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
