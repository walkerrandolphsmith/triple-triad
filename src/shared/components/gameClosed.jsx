import React from 'react';

export class GameClosed extends React.Component {
    render() {
        let { id, owner, opponent, red, blue, phase } = this.props.game;
        let winner;
        if(blue === red) {
            winner = 'tie';
        } else {
            winner = blue > red ? 'winner' : 'loser';
        }
        let ribbonClasses = `corner-ribbon top-right sticky shadow ${winner}`;
        return (
            <div id={id} className="game">
                <div className={ribbonClasses}>{winner}</div>
                <div className="header">
                    <h3 className="title">
                        <i className="fa fa-star-o"></i>
                        <span>Game</span>
                    </h3>
                </div>
                <div className="detail">
                    <div className="content">
                        <p>Game {id}</p>
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
            </div>
        );
    }
}