import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class PasswordReset extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            password: '',
            confirmPassword: ''
        };
    }

    handleChange(event) {
        const { name, value } = event.target;

        if (name === 'password') {
            this.setState({ password: value });
        }

        if(name === 'confirmPassword') {
            this.setState({confirmPassword: value});
        }
        this.props.clearFormErrors();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.passwordReset(this.props.token, this.state.password, this.state.confirmPassword);
    }

    render() {
        let { password, confirmPassword } = this.props.errors;

        let passwordFormGroupClass = `form-group ${password ? 'has-error': ''}`;
        let passwordHelpText = !password ? (<span></span>) : (<span className="help-block">{password}</span>);

        let passwordConfirmFormGroupClass = `form-group ${confirmPassword ? 'has-error': ''}`;
        let passwordConfirmHelpText = !confirmPassword ? (<span></span>) : (<span className="help-block">{confirmPassword}</span>);

        const mainColor = this.context.muiTheme.floatingActionButton.backgroundColor;

        const floatingLabelStyle = {
            color: mainColor
        };

        const underlineFocusStyle = {
            borderColor: mainColor
        };

        return (
            <div id="reset-password">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        hintText="Password"
                        floatingLabelText="Password"
                        name="password"
                        type="password"
                        floatingLabelFocusStyle={floatingLabelStyle}
                        underlineFocusStyle={underlineFocusStyle}
                        value={this.state.password}
                        onChange={this.handleChange.bind(this)}
                    />
                    <TextField
                        hintText="Confirm Password"
                        floatingLabelText="Confirm Password"
                        name="confirmPassword"
                        type="confirmPassword"
                        floatingLabelFocusStyle={floatingLabelStyle}
                        underlineFocusStyle={underlineFocusStyle}
                        value={this.state.confirmPassword}
                        onChange={this.handleChange.bind(this)}
                    />
                    <RaisedButton
                        label="Reset Password"
                        labelColor={'white'}
                        backgroundColor={this.context.muiTheme.baseTheme.palette.backgroundColor}
                        type="submit"
                        style={{ margin: '2em' }}
                    />
                </form>
            </div>
        );
    }
}

PasswordReset.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
