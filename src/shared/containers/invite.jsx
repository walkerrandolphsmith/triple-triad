import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/';

import React from 'react';
import { Invite } from './../components/';

class InviteContainer extends React.Component {

    render() {
        return (
            <Invite {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(InviteContainer);