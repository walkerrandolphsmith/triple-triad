import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { endPhase } from './../ducks/game';
import { updateFocusSetting, updateSetting } from '../ducks/settings';

import React from 'react';
import { Settings } from './../components';

function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ endPhase, updateFocusSetting, updateSetting }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);