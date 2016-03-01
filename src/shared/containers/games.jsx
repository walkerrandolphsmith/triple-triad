import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import * as Actions from './../actions/';

import React from 'react';
import { Games } from './../components';

class GamesContainer extends React.Component {
    render() {
        return (
            <Games {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        games: state.games.get('games')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...Actions, pushPath: pushPath},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
