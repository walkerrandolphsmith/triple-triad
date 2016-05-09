import React from 'react';

export class GameDetails extends React.Component {
    render() {
        let { game, score, winner, winnerType } = this.props;
        let phrase = "";
        let handStyles={visibility: 'hidden'};
        let bannerStyle={};
        let bannerScrimStyle={};

        switch(winner){
            case winnerType.NONE:
                handStyles.visibility = 'visible';
                bannerStyle.display = 'none';
                break;
            case winnerType.TIE:
                phrase = "Tie";
                bannerScrimStyle.background = 'repeating-linear-gradient(45deg, #5d9634, #5d9634 10px, #538c2b 10px, #538c2b 20px)';
                break;
            case winnerType.BLUE:
                phrase = "Player 1";
                bannerScrimStyle.background = 'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)';
                break;
            case winnerType.RED:
                phrase = "Player 2";
                bannerScrimStyle.background = 'repeating-linear-gradient(45deg, red, red 10px, #FF2850 10px, #FF2850 20px)';
                break;
        }
        return (
            <div id="round">
                <div className="row">

                </div>
                <div style={bannerStyle}>
                    <div id="banner-inner" className="row">
                        <div className="col-md-12">
                            <div className="results row">
                                <div className="col-md-1">{score.blue}</div>
                                <div className="col-md-10">{phrase}</div>
                                <div className="col-md-1">{score.red}</div>
                            </div>
                        </div>
                    </div>
                    <div id="banner-scrim" className="row" style={bannerScrimStyle}></div>
                </div>
            </div>
        );
    }
}