import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';

import React from 'react';
import ResetPassword from './../components/resetPassword/resetPassword';

class ResetPasswordContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <ResetPassword {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.routing.path.split('/reset/')[1],
        errors: {
            password: state.signupForm.get('password'),
            confirmPassword: state.signupForm.get('confirmPassword')
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer)