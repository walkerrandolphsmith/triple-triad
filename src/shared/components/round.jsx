import React from 'react';
import { Board } from './board';
import { Hand } from './hand';

export class Round extends React.Component {

    render() {
        let { game, board, hand, opponentHand, settings, validPieces, score, winner, winnerType } = this.props;
        let { selectCard, completeTurn, endPhase } = this.props;

        let phrase = "";
        let handStyles={visibility: 'hidden'};
        let bannerStyle={};
        let bannerScrimStyle={};

        switch(winner){
            case winnerType.NONE:
                handStyles.visibility = 'visible';
                bannerStyle.display = 'none';
                break;
            case winnerType.TIE:
                phrase = "Tie";
                bannerScrimStyle.background = 'repeating-linear-gradient(45deg, #5d9634, #5d9634 10px, #538c2b 10px, #538c2b 20px)';
                break;
            case winnerType.BLUE:
                phrase = "Player 1";
                bannerScrimStyle.background = 'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)';
                break;
            case winnerType.RED:
                phrase = "Player 2";
                bannerScrimStyle.background = 'repeating-linear-gradient(45deg, red, red 10px, #FF2850 10px, #FF2850 20px)';
                break;
        }

        return (
            <div id="round">
                <div className="row">
                    <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12" style={handStyles}>
                        <Hand score={score.blue} cards={hand} selectedCard={game.get('selectedCard')} showBack={false} clickAction={selectCard} />
                    </div>

                    <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <Board cards={board} validPieces={validPieces} selectedPiece={game.get('selectedPiece')} completeTurn={completeTurn} />
                    </div>

                    <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12" style={handStyles}>
                        <Hand score={score.red} cards={opponentHand} selectedCard={game.get('selectedCard')} showBack={settings.get('visibleHand')} clickAction={() => {}} />
                    </div>
                </div>
                <div style={bannerStyle}>
                    <div id="banner-inner" className="row">
                        <div className="col-md-12">
                            <div className="results row">
                                <div className="col-md-1">{score.blue}</div>
                                <div className="col-md-10">{phrase}</div>
                                <div className="col-md-1">{score.red}</div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <button className="btn btn-main" onClick={endPhase}>Play again</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="banner-scrim" className="row" style={bannerScrimStyle}></div>
                </div>
            </div>
        );
    }
}