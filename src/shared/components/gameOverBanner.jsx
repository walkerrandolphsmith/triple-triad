import React from 'react';
import WINNER from './../constants/winner';

export default class Round extends React.Component {

    click() {
        this.props.newGame();
    }

    render() {
        let {winner, score, newGame} = this.props;

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
                        <button className="play-again" onClick={this.click.bind(this)}>Play again</button>
                    </div>
                </div>
            </div>
        );
    }
}