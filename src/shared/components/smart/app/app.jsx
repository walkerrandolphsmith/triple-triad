import React from 'react';
import { Navigation } from './../navigation/navigation';

export class App extends React.Component {

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