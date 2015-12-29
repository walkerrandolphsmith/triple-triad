import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../action-creators/';

import React from 'react';
import SettingsSelection from './settingsSelection';
import CardSelection from './cardSelection';
import Round from './round';

class Game extends React.Component {
    render() {
        let currentGameStep = null;

        switch(this.props.game.step){
            case 0: currentGameStep = (<SettingsSelection />); break;
            case 1: currentGameStep = (<CardSelection/>); break;
            case 2: currentGameStep = (<Round/>); break;
            default: console.log("default"); break;
        }

        return (
            <div id="game">
                {currentGameStep}
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        game: state.game
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
