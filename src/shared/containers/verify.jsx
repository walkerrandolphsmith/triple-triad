import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';

class Verify extends React.Component {

    componentDidMount() {
        this.props.verifyEmail(this.props.token);
    }

    render() {
        return (
            <div id="verify">
            {this.props.token}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.routing.locationBeforeTransitions.pathname.split('/verify/')[1]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Verify)