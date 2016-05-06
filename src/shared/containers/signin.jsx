import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SignIn } from './../components';
import { clearFormErrors } from '../ducks/forms';
import { signIn } from '../ducks/auth';

function mapStateToProps(state) {
    return {
        errors: {
            username: state.forms.get('signIn').get('username'),
            password: state.forms.get('signIn').get('password')
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clearFormErrors, signIn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)