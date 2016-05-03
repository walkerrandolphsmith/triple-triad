import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { endPhase } from './../actions/';
import { updateFocusSetting, updateSetting } from './../reducers/settings/settings';

import React from 'react';
import { Settings } from './../components';

function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}

function mapDispatchToProps(dispatch) {
    let actions = { endPhase: endPhase, updateFocusSetting: updateFocusSetting, updateSetting: updateSetting };
    return bindActionCreators(actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings);