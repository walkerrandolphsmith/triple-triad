import React from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import { Game } from './game';
import { GameClosed } from './gameClosed';
import { Checkbox } from './checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';


export class Games extends React.Component {

    setWinnerTypeFilter(winnerType) {
        this.props.filterWinnerType(winnerType);
    }

    setPhaseFilter(phase) {
        this.props.filterPhase(phase);
    }

    render() {
        let { phases, games, isMyTurn, push, setCurrentGame, deleteGame, closedGameShown, winnerType, phaseFilterValue } = this.props;

        const gamesList = games.map(game => {
            return game.phase !== 'GAME_OVER'
                ? (<Game key={game.id} game={game} isMyTurn={isMyTurn} push={push} setCurrentGame={setCurrentGame} deleteGame={deleteGame} />)
                : (<GameClosed key={game.id} game={game} />);
        });

        let phaseMenuItems = [];
        for(var phase in phases){
            phaseMenuItems.push(<MenuItem eventKey={phase}>{phase}</MenuItem>);
        }

        return (
            <div id="game-selection">
                <div id="new-game">
                    <FloatingActionButton onMouseDown={this.props.createGame} backgroundColor="#0082BF">
                        <i className="fa fa-plus"></i>
                    </FloatingActionButton>
                </div>
                <div id="filters">
                    <Checkbox id="show-closed" 
                              label="Show Closed"
                              checked={closedGameShown}
                              onChange={this.props.showClosed} 
                              onFocus={() => {}} 
                    />
                    <SplitButton bsStyle={'default'}
                                 title={winnerType}
                                 key={0}
                                 id="split-button-basic-winner-type"
                                 onSelect={this.setWinnerTypeFilter.bind(this)}>
                        <MenuItem eventKey="all">All</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="winner">Winner</MenuItem>
                        <MenuItem eventKey="loser">Loser</MenuItem>
                        <MenuItem eventKey="tie">Tie</MenuItem>
                    </SplitButton>
                    <SplitButton bsStyle={'default'}
                                 title={phaseFilterValue}
                                 key={1}
                                 id="split-button-basic-phases"
                                 onSelect={this.setPhaseFilter.bind(this)}>
                        <MenuItem eventKey="all">All</MenuItem>
                        <MenuItem divider />
                        {phaseMenuItems}
                    </SplitButton>
                </div>
                <div id="games">
                    {gamesList}
                </div>
            </div>
        );
    }
}