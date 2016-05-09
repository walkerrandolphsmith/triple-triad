import React from 'react';
import { Board } from './board';
export class GameDetails extends React.Component {

    componentWillUnmount() {
        document.body.style.background = '#dde2e9';
    }

    render() {
        let { board, game, score, winner, winnerType } = this.props;

        let background = null;
        let phrase = "";
        let detailsStyle = {
            position: 'absolute',
            width: 'calc(100% - 30px)'
        };
        let bannerStyle = {
            position: 'absolute',
            zIndex: 3,
            top: 136,
            textAlign: 'center',
            width: '100%'
        };
        let boardWrapperStyle = {
            position: 'absolute',
            zIndex: 2,
            top: 0,
            height: '300px',
            width: '100%'
        };
        let resultsSytle = {
            font: 'bold 6em Impact, sans-serif',
            textTransform: 'uppercase',
            textShadow: '2px 2px 0 white, 4px 4px 0 black',
            textAlign: 'center',
            letterSpacing: '8px',
            color: 'black'
        };

        switch(winner){
            case winnerType.TIE:
                background = 'repeating-linear-gradient(45deg, #5d9634, #5d9634 10px, #538c2b 10px, #538c2b 20px)';
                phrase = "Tie";
                break;
            case winnerType.BLUE:
                background = 'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)';
                phrase = "Player 1";
                break;
            case winnerType.RED:
                background = 'repeating-linear-gradient(45deg, red, red 10px, #FF2850 10px, #FF2850 20px)';
                phrase = "Player 2";
                break;
        }
        document.body.style.background = background;
        document.body.style.height = '100vh';

        return (
            <div id="game-details" style={detailsStyle}>
                <div id="banner" className="row" style={bannerStyle}>
                    <div className="col-md-1" style={resultsSytle}>{score.blue}</div>
                    <div className="col-md-10" style={resultsSytle}>{phrase}</div>
                    <div className="col-md-1" style={resultsSytle}>{score.red}</div>
                </div>
                <div id="board-wrapper" style={boardWrapperStyle}>
                    <div id="board" className="row">
                        <div className="col-md-12">
                            <Board cards={board}
                                   validPieces={[]}
                                   selectedPiece={game.get('selectedPiece')}
                                   completeTurn={() => {}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}