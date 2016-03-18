import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/';

import React from 'react';
import { Hold } from './../components/';

function mapStateToProps(state) {
    return {
        holding: true
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Hold);