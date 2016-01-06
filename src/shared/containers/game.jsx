import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../action-creators/';
import { toJS } from 'immutable';

import React from 'react';
import SettingsSelection from './settingsSelection';
import CardSelection from './cardSelection';
import Round from './round';
import GameOverBanner from './gameOverBanner';

class Game extends React.Component {
    render() {
        let currentGameStep = null;

        switch(this.props.step.current){
            case 0: currentGameStep = (<SettingsSelection />); break;
            case 1: currentGameStep = (<CardSelection/>); break;
            case 2: currentGameStep = (<Round/>); break;
            case 3: currentGameStep = (<GameOverBanner />); break;
            default: console.log("default"); break;
        }

        return (
            <div id="game" className="container">
                <div className="row">
                    <div className="col-md-12">
                        {currentGameStep}
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        step: state.step.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
