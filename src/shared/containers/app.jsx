import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './../actions/';
import KEY_CODE from './../constants/keyCodes';

import React from 'react';
import { Navigation } from './../components';

class App extends React.Component {

    KeyDownListener(board, event) {
        const { handleUp, handleDown, handleRight, handleLeft, handleEnter, handleEscape } = board.props;

        switch(event.which){
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
            <div>
                <Navigation user={this.props.user} activeRoute={this.props.activeRoute} signOut={this.props.signOut}/>
                <div id="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.get('user').get('username'),
        activeRoute: state.routing.locationBeforeTransitions ? state.routing.locationBeforeTransitions.pathname : '/'
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
