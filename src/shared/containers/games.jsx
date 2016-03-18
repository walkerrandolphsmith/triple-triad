import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as Actions from './../actions/';

import React from 'react';
import { Games } from './../components';

function mapStateToProps(state) {
    return {
        games: state.games.get('games')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...Actions, push: push},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
