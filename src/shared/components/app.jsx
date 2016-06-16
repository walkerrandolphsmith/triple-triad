import React from 'react';
import { Navigation } from './navigation';
import { baseTheme } from './../constants/themes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export class App extends React.Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    KeyDownListener(board, event) {
        const { handleUp, handleDown, handleRight, handleLeft, handleEnter, handleEscape } = board.props;
        const { UP, DOWN, LEFT, RIGHT, ENTER, ESC } = board.props.keyCodes;

        switch(event.which){
            case UP: handleUp(); break;
            case DOWN: handleDown(); break;
            case LEFT: handleLeft(); break;
            case RIGHT: handleRight(); break;
            case ENTER: handleEnter(); break;
            case ESC: handleEscape(); break;
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
                <Navigation {...this.props} />
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

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};