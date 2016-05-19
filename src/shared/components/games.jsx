import React from 'react';
import { Game } from './game';

export class Games extends React.Component {

    render() {
        let { games, isMyTurn, push, deleteGame } = this.props;

        const gamesList = games.map(game => <Game key={game.id} game={game} isMyTurn={isMyTurn}
                                                  push={push} deleteGame={deleteGame} />);

        return (
            <div id="game-selection">
                <div id="new-game">
                    <button className="btn btn-main" onClick={this.props.createGame}> New Game </button>
                </div>
                <div id="games">
                    {gamesList}
                </div>
            </div>
        );
    }
}