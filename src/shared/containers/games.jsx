import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/';

import React from 'react';
import GamesList from './../components/games';

class Games extends React.Component {
    render() {
        return (
            <GamesList {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        games: [{id: 12}, {id: 13}, {id: 14}]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
