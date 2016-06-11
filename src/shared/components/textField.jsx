import React from 'react';
import TextField from 'material-ui/TextField';

export class Input extends React.Component {
    render() {
        const { hintText, floatingLabelText, type, name, value, onChange } = this.props;

        const mainColor = this.context.muiTheme.floatingActionButton.backgroundColor;

        const floatingLabelStyle = {
            color: mainColor
        };

        const underlineFocusStyle = {
            borderColor: mainColor
        };

        return (
            <TextField
                hintText={hintText}
                floatingLabelText={floatingLabelText}
                name={name}
                type={type}
                floatingLabelFocusStyle={floatingLabelStyle}
                underlineFocusStyle={underlineFocusStyle}
                value={value}
                onChange={onChange}
            />
        )
    }
}

Input.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};