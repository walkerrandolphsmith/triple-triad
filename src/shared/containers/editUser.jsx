import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { EditUser } from './../components';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
    return {
        id: state.auth.user.id,
        username: state.auth.user.username,
        email: state.auth.user.email,
        isVerified: state.auth.user.isVerified,
        avatar: state.auth.user.avatar
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
