import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/';

import React from 'react';
import GamesList from './../components/games';

class GamesContainer extends React.Component {
    render() {
        return (
            <GamesList {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        games: state.games.get('games')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
