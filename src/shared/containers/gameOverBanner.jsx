import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../action-creators/';
import { toJS } from 'immutable';
import { scoreSelector, winnerSelector } from './../selectors/index';

import React from 'react';
import WINNER from './../constants/winner';

export default class GameOverBanner extends React.Component {

    click() {
        this.props.newGame();
    }

    render() {
        let {winner, score} = this.props;

        let phrase = "";

        let bannerStyle={};

        switch(winner){
            case WINNER.NONE:
                bannerStyle.display = 'none';
            case WINNER.TIE:
                phrase = "Tie";
                bannerStyle.background = 'repeating-linear-gradient(45deg, #5d9634, #5d9634 10px, #538c2b 10px, #538c2b 20px)';
                break;
            case WINNER.BLUE:
                phrase = "Player 1";
                bannerStyle.background = 'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)';
                break;
            case WINNER.RED:
                phrase = "Player 2";
                bannerStyle.background = 'repeating-linear-gradient(45deg, red, red 10px, #FF2850 10px, #FF2850 20px)';
                break;
        }

        return (
            <div id="banner" className="container" style={bannerStyle}>
                <div className="results row">
                    <div className="col-md-1">{score.blue}</div>
                    <div className="col-md-10">{phrase}</div>
                    <div className="col-md-1">{score.red}</div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-next" onClick={this.click.bind(this)}>Play again</button>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const game = state.game.toJS();

    return {
        score: scoreSelector(game),
        winner: winnerSelector(game)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(GameOverBanner);
