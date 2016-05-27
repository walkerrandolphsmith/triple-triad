import React from 'react';

export class Game extends React.Component {

    selectGame(id) {
        this.props.setCurrentGame(id);
        this.props.push(`/game/${id}`);
    }

    deleteGame(id) {
        this.props.deleteGame(id);
    }

    render() {
        let { id, owner, opponent, red, blue, phase, canDelete } = this.props.game;
        let waitingOnPlayerText = this.props.isMyTurn ? 'you' : 'opponent';
        let gameAction = canDelete ? (<i className="fa fa-trash-o" onClick={this.deleteGame.bind(this, id)}></i>) : (<i></i>);

        return (
            <div id={id} className="game">
                <div className="header">
                    <h3 className="title">
                        <i className="fa fa-star-o"></i>
                        <span onClick={this.selectGame.bind(this, id)}>Game</span>
                        {gameAction}
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
                            <span>{blue} v {red}</span>
                        </div>
                    </div>
                    <div className="footer">
                        <span>{owner}</span>
                        <span> VS </span>
                        <span>{opponent}</span>
                    </div>
                </div>
                <div className="more" onClick={this.selectGame.bind(this, id)}>
                    <span>Play</span>
                </div>
            </div>
        );
    }
}