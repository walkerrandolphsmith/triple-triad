import React from 'react';

export default class Games extends React.Component {

    render() {
        let { games } = this.props;

        return (
            <div id="games">
                Games List
            </div>
        );
    }
}