import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';

import React from 'react';
import ForgotPassword from './../components/forgotPassword';

class ForgotPasswordContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <ForgotPassword {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer)