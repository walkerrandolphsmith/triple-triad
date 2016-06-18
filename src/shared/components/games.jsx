import React from 'react';
import { Game } from './game';
import { GameClosed } from './gameClosed';
import { GamesBar } from './gamesBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';

export class Games extends React.Component {

    setWinnerTypeFilter(event, index, winnerType) {
        this.props.filterWinnerType(winnerType);
    }

    setPhaseFilter(event, index, phase) {
        this.props.filterPhase(phase);
    }

    render() {
        let { games, isMyTurn, push, setCurrentGame, deleteGame } = this.props;

        const gamesList = games.map(game => {
            return game.phase !== 'GAME_OVER'
                ? (<Game key={game.id} game={game} isMyTurn={isMyTurn} push={push} setCurrentGame={setCurrentGame} deleteGame={deleteGame} />)
                : (<GameClosed key={game.id} game={game} />);
        });

        return (
            <div id="game-selection">
                <div id="new-game">
                    <FloatingActionButton onMouseDown={this.props.createGame}
                                          backgroundColor={this.context.muiTheme.floatingActionButton.backgroundColor}>
                        <i className="fa fa-plus"></i>
                    </FloatingActionButton>
                </div>
                <GamesBar {...this.props} />
                <div id="games">
                    {gamesList}
                </div>
            </div>
        );
    }
}

Games.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};