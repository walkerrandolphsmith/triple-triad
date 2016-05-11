import React from 'react';

export class Counter extends React.Component {
    render() {
        let key = "KEY";
        let value  = "VALUE";
        if(this.props.localCounter) {
            key = this.props.localCounter.key;
            value = this.props.localCounter.value;
        }

        return (
            <div>KEY: {key} VALUE: {value}</div>
        )
    }
}