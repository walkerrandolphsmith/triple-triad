import React from 'react';
import Game from './game';

export default class Games extends React.Component {

    render() {
        let { games } = this.props;

        const gamesList = games.map((game, index) => {
            return (<Game key={index} {...game} />);
        });

        return (
            <div id="games">
                <h2>Game List</h2>
                {gamesList}
            </div>
        );
    }
}