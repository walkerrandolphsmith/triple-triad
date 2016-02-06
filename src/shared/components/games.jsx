import React from 'react';
import Game from './game';

export default class Games extends React.Component {

    componentDidMount() {
        this.props.getGames();
    }

    render() {
        let { games } = this.props;

        const gamesList = games.map((game, index) => {
            console.log(game);
            return (<Game key={index} id={game._id} />);
        });

        return (
            <div id="games">
                <h2>Game List</h2>
                <button className="btn btn-next" onClick={this.props.createGame}> New Game </button>
                {gamesList}

            </div>
        );
    }
}