import React from 'react';
import { Button } from './button';
import {Card, CardText} from 'material-ui/Card';
import { Input } from './textField';
import FormStyles from './styles/forms';

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

        return (
            <Card style={FormStyles}>
                <CardText>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <Input
                            hintText="Password"
                            floatingLabelText="Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange.bind(this)}
                        />
                        <Input
                            hintText="Confirm Password"
                            floatingLabelText="Confirm Password"
                            name="confirmPassword"
                            type="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange.bind(this)}
                        />
                        <Button label="Reset Password" type="submit" style={{ margin: '2em' }} />
                    </form>
                </CardText>
            </Card>
        );
    }
}