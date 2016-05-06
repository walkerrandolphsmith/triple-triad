import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SignUp } from './../components';
import { clearFormErrors } from '../ducks/forms';
import { signUp } from '../ducks/auth';

function mapStateToProps(state) {
    return {
        errors: {
            username: state.forms.get('signUp').get('username'),
            password: state.forms.get('signUp').get('password'),
            confirmPassword: state.forms.get('signUp').get('confirmPassword'),
            email: state.forms.get('signUp').get('email')
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clearFormErrors, signUp }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)