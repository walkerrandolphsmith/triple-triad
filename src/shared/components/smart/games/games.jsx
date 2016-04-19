import React from 'react';
import { Game } from './../game/game';

export class Games extends React.Component {

    render() {
        const gamesList = this.props.games.map(game => {
            return (<Game key={game} id={game} push={this.props.push} />);
        });

        return (
            <div id="games">
                <h2>Game List</h2>
                <button className="btn btn-main" onClick={this.props.createGame}> New Game </button>
                {gamesList}
            </div>
        );
    }
}