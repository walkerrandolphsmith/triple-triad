import React from 'react';
import { Link } from 'react-router';

export class PasswordReset extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            password: '',
            confirmPassword: ''
        };
    }
    componentDidMount() {

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
            <div id="reset-password">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className={passwordFormGroupClass}>
                        <label htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            labelFor="password"
                            ref="passwordInput"
                            type="text"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleChange.bind(this)}
                        />
                        {passwordHelpText}
                    </div>
                    <div className={passwordConfirmFormGroupClass}>
                        <label htmlFor="confirmPassword">Password</label>
                        <input
                            className="form-control"
                            labelFor="confirmPassword"
                            ref="confirmPasswordInput"
                            type="text"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange.bind(this)}
                        />
                        {passwordConfirmHelpText}
                    </div>
                    <button
                        className="btn btn-main"
                        name="submitButton"
                        type="submit">
                        Reset Password
                    </button>
                </form>
            </div>
        );
    }
}