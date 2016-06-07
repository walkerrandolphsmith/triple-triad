import React from 'react';
import { Game } from './game';
import { GameClosed } from './gameClosed';
import { Checkbox } from './checkbox';

export class Games extends React.Component {

    render() {
        let { games, isMyTurn, push, setCurrentGame, deleteGame, closedGameShown } = this.props;

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
                    <Checkbox id="show-closed" 
                              label="Show Closed"
                              checked={closedGameShown}
                              onChange={this.props.showClosed} 
                              onFocus={() => {}} 
                    />
                </div>
                <div id="games">
                    {gamesList}
                </div>
            </div>
        );
    }
}