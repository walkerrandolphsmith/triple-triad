import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export class Button extends React.Component {
    render() {
        const { label, name, type, onMouseDown, style } = this.props;

        return (
            <RaisedButton
                label={label}
                name={name}
                type={type}
                labelColor={'white'}
                backgroundColor={this.context.muiTheme.raisedButton.backgroundColor}
                onMouseDown={onMouseDown}
                style={style}
            />
        )
    }
}

Button.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};