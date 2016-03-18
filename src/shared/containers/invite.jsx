import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/';

import React from 'react';
import { Invite } from './../components/';

function mapStateToProps(state) {
    return {
        settings: state.settings,
        gameId: state.routing.locationBeforeTransitions.pathname.split('game/')[1]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Invite);