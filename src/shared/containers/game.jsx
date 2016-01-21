import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

        let navStyles = {
            display: this.props.username ? 'block' : 'none'
        };

        return (
            <div id="game" className="container-fluid">

                <div className="row" style={navStyles}>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <button onClick={this.props.signOut}> sign out </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        username: state.auth.get('user').get('username')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
