import React from 'react';
import { Checkbox } from './checkbox';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


export class GamesBar extends React.Component {

    setWinnerTypeFilter(event, index, winnerType) {
        this.props.filterWinnerType(winnerType);
    }

    setPhaseFilter(event, index, phase) {
        this.props.filterPhase(phase);
    }

    render() {
        let { phases, closedGameShown, winnerType, phaseFilterValue } = this.props;

        let phaseMenuItems = [];
        for(var phase in phases){
            phaseMenuItems.push(<MenuItem value={phase} primaryText={phase}></MenuItem>);
        }

        return (
            <div id="game-selection">
                <div id="filters">
                    <Checkbox id="show-closed"
                              label="Show Closed"
                              checked={closedGameShown}
                              onChange={this.props.showClosed}
                              onFocus={() => {}}
                    />
                    <DropDownMenu value={winnerType} onChange={this.setWinnerTypeFilter.bind(this)}>
                        <MenuItem value={'all'} primaryText="All" />
                        <MenuItem value={'winner'} primaryText="Winner" />
                        <MenuItem value={'loser'} primaryText="Loser" />
                        <MenuItem value={'tie'} primaryText="Tie" />
                    </DropDownMenu>
                    <DropDownMenu value={phaseFilterValue} onChange={this.setPhaseFilter.bind(this)}>
                        <MenuItem value="all" primaryText="All"></MenuItem>
                        {phaseMenuItems}
                    </DropDownMenu>
                </div>
            </div>
        );
    }
}