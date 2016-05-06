import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as Actions from './../actions/';

import React from 'react';
import { Games } from './../components';

function mapStateToProps(state) {
    return {
        games: state.game.get('games').map(game => ({
            id: game.get('id'),
            owner: game.get('owner'),
            opponent: 'opponent',
            currentPlayer: game.get('currentPlayer'),
            phase: game.get('phase')
        })),
        id: state.auth.get('user').get('id')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...Actions, push: push},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
