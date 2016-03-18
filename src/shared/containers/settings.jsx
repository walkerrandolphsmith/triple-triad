import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/';

import React from 'react';
import { Settings } from './../components';

function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings);