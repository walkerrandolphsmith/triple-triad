import React from 'react';
import WINNER from './../constants/winner';

export default class Round extends React.Component {

    click() {
        this.props.newGame();
    }

    render() {
        let {winner, score, newGame} = this.props;

        let phrase = "";
        let bannerStyle = {
            background: 'none',
            display: 'block',
            zIndex: '1000',
            position: 'absolute',
            left: '0',
            top: '120px',
            height: '300px',
            width: '100%',
            textAlign: 'center'
        };

        let phraseStyle = {
            position: 'absolute',
            top: '25%',
            display: 'block',
            width: '100%',
            font: 'bold 6em Impact, sans-serif',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            textShadow: '2px 2px 0 white, 4px 4px 0 black'
        };

        let blueScoreStyle = {
            position: 'absolute',
            left: '10px',
            top: '25%',
            font: 'bold 6em Impact, sans-serif',
            textShadow: '2px 2px 0 white, 4px 4px 0 black'
        };

        let redScoreStyle = {
            position: 'absolute',
            right: '15px',
            top: '25%',
            font: 'bold 6em Impact, sans-serif',
            textShadow: '2px 2px 0 white, 4px 4px 0 black'
        };

        let buttonStyle = {
            width: '280px',
            textAlign: 'center',
            margin: '0px auto',
            fontSize: '25px',
            padding: '20px',
            borderRadius: '9px',
            color: 'white',
            top: '200px',
            position: 'relative'
        };

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
            <div id="banner" style={bannerStyle}>
                <span style={blueScoreStyle}>{score.blue}</span>
                <span style={phraseStyle}>{phrase}</span>
                <span style={redScoreStyle}>{score.red}</span>

                <button style={buttonStyle} onClick={this.click.bind(this)}>Play again</button>
            </div>
        );
    }
}