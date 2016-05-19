import React from 'react';
import { Board } from './board';
import { Hand } from './hand';

export class Round extends React.Component {

    render() {
        let { game, isMyTurn, board, hand, opponentHand, settings, currentPlayerMessage, validPieces, score } = this.props;
        let { selectCard, completeTurn } = this.props;

        if(!isMyTurn) {
            selectCard = () => {};
            completeTurn = () => {};
        }

        const messageStyles = {
            display: currentPlayerMessage ? 'block' : 'none'
        };

        return (
            <div id="round">
                <div className="currentPlayerMessage"
                     style={messageStyles}>
                    {currentPlayerMessage}
                </div>
                <div className="row">
                    <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12">
                        <Hand score={score.blue}
                              cards={hand}
                              selectedCard={game.get('selectedCard')}
                              showBack={false}
                              clickAction={selectCard}
                        />
                    </div>

                    <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <Board cards={board}
                               validPieces={validPieces}
                               selectedPiece={game.get('selectedPiece')}
                               completeTurn={completeTurn}
                        />
                    </div>

                    <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12">
                        <Hand score={score.red}
                              cards={opponentHand}
                              selectedCard={game.get('selectedCard')}
                              showBack={settings.get('visibleHand')}
                              clickAction={() => {}}
                        />
                    </div>
                </div>
            </div>
        );
    }
}