import React from 'react';
import { Board } from './board';
import { Hand } from './hand';

export class Round extends React.Component {

    render() {
        let { loggedInUser, game, isMyTurn, board, hand, opponentHand, settings, validPieces, score } = this.props;
        let { selectCard, completeTurn } = this.props;

        if(!isMyTurn) {
            selectCard = () => {};
            completeTurn = () => {};
        }

        const messageStyles = {
            display: game.currentPlayerMessage ? 'block' : 'none'
        };

        return (
            <div id="round">
                <div className="currentPlayerMessage"
                     style={messageStyles}>
                    {game.currentPlayerMessage}
                </div>
                <div className="row">
                    <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12">
                        <Hand gameOwner={game.owner}
                              loggedInUser={loggedInUser}
                              score={score.blue}
                              cards={hand}
                              selectedCard={game.selectedCard}
                              showBack={false}
                              clickAction={selectCard}
                        />
                    </div>

                    <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <Board gameOwner={game.owner}
                               cards={board}
                               validPieces={validPieces}
                               selectedPiece={game.selectedPiece}
                               completeTurn={completeTurn}
                        />
                    </div>

                    <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-12">
                        <Hand gameOwner={game.owner}
                              loggedInUser={loggedInUser}
                              score={score.red}
                              cards={opponentHand}
                              selectedCard={game.selectedCard}
                              showBack={settings.get('visibleHand')}
                              clickAction={() => {}}
                        />
                    </div>
                </div>
            </div>
        );
    }
}