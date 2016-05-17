import React from 'react';
import { Game } from './game';

export class Games extends React.Component {

    render() {
        let { id, games } = this.props;
        const gamesList = games.map(game => {
            return (<Game key={game.id}
                   loggedInAs={this.props.id}
                   game={game}
                   push={this.props.push}
                   deleteGame={this.props.deleteGame} />)
        });

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