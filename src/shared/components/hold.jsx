import React from 'react';

export class Hold extends React.Component {

    render() {
        return (
            <div id="blocking">
                <span className="fa fa-spinner fa-spin"></span>
                <p>Waiting to opponent to accept the game...</p>
            </div>
        )
    }
}