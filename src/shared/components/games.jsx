import React from 'react';
import { Game } from './game';
import { GameClosed } from './gameClosed';

export class Games extends React.Component {

    render() {
        let { games, isMyTurn, push, setCurrentGame, deleteGame } = this.props;

        const gamesList = games.map(game => {
            return game.phase !== 'GAME_OVER'
                ? (<Game key={game.id} game={game} isMyTurn={isMyTurn} push={push} setCurrentGame={setCurrentGame} deleteGame={deleteGame} />)
                : (<GameClosed key={game.id} game={game} />);
        });

        return (
            <div id="game-selection">
                <div id="new-game" style={{display: 'inline-block'}}>
                    <button className="btn btn-main" onClick={this.props.createGame}> New Game </button>
                </div>
                <div className="filters" style={{display: 'inline-block', marginLeft: '2em'}}>
                    <div className="control-group">
                        <input type="checkbox" id="show-closed"
                               onChange={this.props.showClosed}>
                        </input>
                        <label htmlFor="show-closed"></label>
                        <label className="text" htmlFor="show-closed">Show Closed</label>
                    </div>
                </div>
                <div id="games">
                    {gamesList}
                </div>
            </div>
        );
    }
}