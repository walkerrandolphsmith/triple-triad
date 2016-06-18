import React from 'react';
import { Game } from './game';
import { GameClosed } from './gameClosed';
import { Checkbox } from './checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


export class Games extends React.Component {

    setWinnerTypeFilter(event, index, winnerType) {
        this.props.filterWinnerType(winnerType);
    }

    setPhaseFilter(event, index, phase) {
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
            phaseMenuItems.push(<MenuItem value={phase} primaryText={phase}></MenuItem>);
        }

        return (
            <div id="game-selection">
                <div id="new-game">
                    <FloatingActionButton onMouseDown={this.props.createGame}
                                          backgroundColor={this.context.muiTheme.floatingActionButton.backgroundColor}>
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
                    <DropDownMenu value={winnerType} onChange={this.setWinnerTypeFilter.bind(this)}
                                  iconStyle={{ fill: this.context.muiTheme.floatingActionButton.backgroundColor}}
                                  underlineStyle={{ borderTopColor: this.context.muiTheme.floatingActionButton.backgroundColor }}>
                        <MenuItem value={'all'} primaryText="All" />
                        <MenuItem value={'winner'} primaryText="Winner" />
                        <MenuItem value={'loser'} primaryText="Loser" />
                        <MenuItem value={'tie'} primaryText="Tie" />
                    </DropDownMenu>
                    <DropDownMenu value={phaseFilterValue} onChange={this.setPhaseFilter.bind(this)}
                                  iconStyle={{ fill: this.context.muiTheme.floatingActionButton.backgroundColor}}
                                  underlineStyle={{ borderTopColor: this.context.muiTheme.floatingActionButton.backgroundColor }}>
                        <MenuItem value="all" primaryText="All"></MenuItem>
                        {phaseMenuItems}
                    </DropDownMenu>
                </div>
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