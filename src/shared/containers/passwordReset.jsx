import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PasswordReset } from './../components';
import { clearFormErrors } from '../ducks/forms';

function mapStateToProps(state) {
    return {
        token: state.routing.locationBeforeTransitions.pathname.split('/reset/')[1],
        errors: {
            password: state.forms.get('resetPassword').get('password'),
            confirmPassword: state.forms.get('resetPassword').get('confirmPassword')
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clearFormErrors }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset)