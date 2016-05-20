import React from 'react';

export class LeaderBoard extends React.Component {
    render() {
        return (
            <div id="leader-board">
                {this.props.id}
            </div>
        );
    }
}