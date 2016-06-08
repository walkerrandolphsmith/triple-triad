import React from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import { Game } from './game';
import { GameClosed } from './gameClosed';
import { Checkbox } from './checkbox';

export class Games extends React.Component {

    setWinnerTypeFilter(winnerType) {
        this.props.filterWinnerType(winnerType);
    }

    render() {
        let { games, isMyTurn, push, setCurrentGame, deleteGame, closedGameShown, filterWinnerType } = this.props;

        const gamesList = games.map(game => {
            return game.phase !== 'GAME_OVER'
                ? (<Game key={game.id} game={game} isMyTurn={isMyTurn} push={push} setCurrentGame={setCurrentGame} deleteGame={deleteGame} />)
                : (<GameClosed key={game.id} game={game} />);
        });

        return (
            <div id="game-selection">
                <div id="new-game">
                    <button className="btn btn-main" onClick={this.props.createGame}> New Game </button>
                </div>
                <div id="filters">
                    <Checkbox id="show-closed" 
                              label="Show Closed"
                              checked={closedGameShown}
                              onChange={this.props.showClosed} 
                              onFocus={() => {}} 
                    />
                    <SplitButton bsStyle={'default'}
                                 title='Default'
                                 key={0}
                                 id="split-button-basic"
                                 onSelect={this.setWinnerTypeFilter.bind(this)}>
                        <MenuItem eventKey="all">All</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="winner">Winner</MenuItem>
                        <MenuItem eventKey="loser">Loser</MenuItem>
                        <MenuItem eventKey="tie">Tie</MenuItem>
                    </SplitButton>
                </div>
                <div id="games">
                    {gamesList}
                </div>
            </div>
        );
    }
}