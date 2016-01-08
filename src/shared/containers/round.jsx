import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { boardSelector, handSelector, opponentHandSelector, scoreSelector, validPiecesSelector, cardSelectedSelector } from './../selectors/index';
import * as Actions from './../action-creators/';
import KEY_CODE from './../constants/keyCodes';
import { toJS } from 'immutable';

import React from 'react';
import Board from './../components/board';
import Hand from './../components/hand';
import PlayerHand from './../components/playerHand';

class Round extends React.Component {

    KeyDownListener(board, event) {
        const handleUp = board.props.handleUp;
        const handleDown = board.props.handleDown;
        const handleRight = board.props.handleRight;
        const handleLeft = board.props.handleLeft;
        const handleEnter = board.props.handleEnter;
        const handleEscape = board.props.handleEscape;

        const keyCode = event.which;

        switch(keyCode){
            case KEY_CODE.UP: handleUp(); break;
            case KEY_CODE.DOWN: handleDown(); break;
            case KEY_CODE.LEFT: handleLeft(); break;
            case KEY_CODE.RIGHT: handleRight(); break;
            case KEY_CODE.ENTER: handleEnter(); break;
            case KEY_CODE.ESC: handleEscape(); break;
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.KeyDownListener.bind(this, this));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.KeyDownListener);
    }

    render() {
        let { game, board, hand, opponentHand, settings, score, validPieces } = this.props;
        let { selectCard, selectedPieceByClick } = this.props;

        return (
            <div id="round" className="container">
                <div className="row">
                    <div className="col-md-2">
                        <PlayerHand score={score.blue} cards={hand} selectedCard={game.selectedCard} clickAction={selectCard} />
                    </div>

                    <div className="col-md-8">
                        <Board board={board} validPieces={validPieces} selectedPiece={game.selectedPiece} selectedPieceByClick={selectedPieceByClick} />
                    </div>

                    <div className="col-md-2">
                        <Hand score={score.red} cards={opponentHand} showBack={settings.visibleHand} owner={2} />
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const game = state.game.toJS();
    const settings = state.settings.toJS();

    return {
        game: game,
        settings: settings,
        board: boardSelector(game),
        hand: handSelector(game),
        opponentHand: opponentHandSelector(game),
        score: scoreSelector(game),
        validPieces: validPiecesSelector(game)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Round);