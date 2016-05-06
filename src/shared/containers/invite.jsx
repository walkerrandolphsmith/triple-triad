import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { endPhase } from './../ducks/game';
import { updateFocusSetting, updateSetting } from '../ducks/settings';

import React from 'react';
import { Invite } from './../components/';

function mapStateToProps(state) {
    return {
        settings: state.settings,
        gameId: state.routing.locationBeforeTransitions.pathname.split('game/')[1]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ endPhase, updateFocusSetting, updateSetting }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Invite);