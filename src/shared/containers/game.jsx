import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toJS } from 'immutable';
import * as Actions from './../actions/';
import KEY_CODE from './../constants/keyCodes';

import React from 'react';

class Game extends React.Component {

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
        return (
            <div id="game" className="container">
                <div className="row">
                    <div className="col-md-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
