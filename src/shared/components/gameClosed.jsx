import React from 'react';

export class GameClosed extends React.Component {
    render() {
        let { id, owner, ownerAvatar, opponent, opponentAvatar, red, blue, winner, phase } = this.props.game;
        let ribbonClasses = `corner-ribbon top-right sticky shadow ${winner}`;
        return (
            <div id={id} className="game">
                <div className={ribbonClasses}>{winner}</div>
                <div className="header">
                    <h3 className="title">
                        <i className="fa fa-trophy"></i>
                        <span>{id}</span>
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
                        <span>...game over</span>
                    </div>
                </div>
            </div>
        );
    }
}