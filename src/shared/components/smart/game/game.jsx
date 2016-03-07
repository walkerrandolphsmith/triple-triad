import React from 'react';

export class Game extends React.Component {

    selectGame(id) {
        this.props.push(`/game/${id}`);
    }

    render() {
        let { id } = this.props;

        return (
            <div id="game">
                <h2>
                    <span>Game </span>
                    <span onClick={this.selectGame.bind(this, id)}>{id}</span>
                </h2>
            </div>
        );
    }
}