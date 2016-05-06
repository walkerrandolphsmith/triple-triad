import React from 'react';

export class Verify extends React.Component {

    componentDidMount() {
        this.props.verifyEmail(this.props.token);
    }

    render() {
        return (
            <div id="verify">
                {this.props.token}
            </div>
        );
    }
}
