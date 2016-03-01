import React from 'react';
import { Game } from './../game/game';

export class Games extends React.Component {

    componentDidMount() {
        this.props.getGames();
    }

    render() {
        let { games } = this.props;

        const gamesList = games.map((game, index) => {
            return (<Game key={index} id={game._id} pushPath={this.props.pushPath} />);
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