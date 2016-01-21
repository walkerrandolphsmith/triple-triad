import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions/';
import Settings from './../components/settings';

import React from 'react';

class SettingsSelection extends React.Component {

    render() {
        return (
            <Settings {...this.props} />
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


export default connect(mapStateToProps, mapDispatchToProps)(SettingsSelection);