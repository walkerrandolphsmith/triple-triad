import React from 'react';

export class Game extends React.Component {

    selectGame(id) {
        this.props.push(`/game/${id}`);
    }

    render() {
        let { id, owner, opponent, currentPlayer, phase } = this.props.game;
        let waitingOnPlayerText = currentPlayer === this.props.loggedInAs ? 'you' : 'opponent';
        let opponentIsAIText = 'AI' | opponent;
        let blueScore = 5;
        let redScore = 5;

        return (
            <div id={id} className="game">
                <div className="header">
                    <h3 className="title" onClick={this.selectGame.bind(this, id)}>
                        <i className="fa fa-star-o"></i>
                        Game
                    </h3>
                </div>
                <div className="detail">
                    <div className="content">
                        <p>Game {id} is in progress</p>
                        <p>...waiting on {waitingOnPlayerText}</p>
                    </div>
                    <div className="content-info">
                        <div className="sub-note">
                            <span>{phase}</span>
                        </div>
                        <div className="sub-note">
                            <span>{blueScore} v {redScore}</span>
                        </div>
                    </div>
                    <div className="footer">
                        <span>{owner}</span>
                        <span> VS </span>
                        <span>{opponentIsAIText}</span>
                    </div>
                </div>
                <div className="more" onClick={this.selectGame.bind(this, id)}>
                    <span>Play</span>
                </div>
            </div>
        );
    }
}