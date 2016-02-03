import React from 'react';
import Game from './game';

export default class Games extends React.Component {

    render() {
        let { id } = this.props;

        return (
            <div id="game">

                <h2>Game {id}</h2>
            </div>
        );
    }
}