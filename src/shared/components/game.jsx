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
        let {
            id, settings, owner, ownerAvatar, opponent, opponentAvatar, red, blue, phase, canDelete
        } = this.props.game;
        let waitingOnPlayerText = this.props.isMyTurn ? 'you' : 'opponent';
        let gameAction = canDelete ? (<i className="fa fa-trash-o" onClick={this.deleteGame.bind(this, id)}></i>) : (<i></i>);
        let gameIcon = settings.multiplayer ? 'users' : 'user';
        return (
            <div id={id} className="game">
                <div className="header">
                    <h3 className="title">
                        <i className={`fa fa-${gameIcon}`}></i>
                        <span onClick={this.selectGame.bind(this, id)}>{id}</span>
                        {gameAction}
                    </h3>
                </div>
                <div className="detail">
                    <div className="content">
                        <span className="owner">
                            <img src={ownerAvatar} />
                            {owner}
                        </span>
                        <span className="vs"> VS </span>
                        <span className="opponent">
                            <img src={opponentAvatar} />
                            {opponent}
                        </span>
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
                        <p>...waiting on {waitingOnPlayerText}</p>
                    </div>
                </div>
                <div className="more" onClick={this.selectGame.bind(this, id)}>
                    <span>Play</span>
                </div>
            </div>
        );
    }
}