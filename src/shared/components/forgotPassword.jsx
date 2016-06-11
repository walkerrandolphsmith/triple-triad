import React from 'react';
import { Button } from './button';
import { Input } from './textField';
import { Link } from 'react-router';

export class ForgotPassword extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: ''
        };
    }

    handleChange(event) {
        const { name, value } = event.target;

        if (name === 'email') {
            this.setState({ email: value });
        }

        this.props.clearFormErrors();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.sendPasswordReset(this.state.email)
    }

    render() {
        let { email } = this.props.errors;
        let emailFormGroupClass = `form-group ${email ? 'has-error': ''}`;
        let emailHelpText = !email ? (<span></span>) : (<span className="help-block">{email}</span>);

        return (
            <div id="forgot-email">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Input
                        hintText="Email"
                        floatingLabelText="Email"
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                    />
                    <Button
                        name="submitButton"
                        type="submit"
                        label="Send Email"
                        style={{ margin: '2em' }}
                    />
                </form>
                <Link to="/signin">
                    <span>I remember, sign in</span>
                </Link>
            </div>
        );
    }
}