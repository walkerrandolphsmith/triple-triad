import React from 'react';
import { Link } from 'react-router';
import {
    isValidUsername,
    isValidPassword,
    passwordsMatch,
    isValidEmail
} from './../../utils/formValidation/formValidation';

export default class SignUp extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }
    componentDidMount() {

    }
    handleChange(event) {
        const { name, value } = event.target;

        if (name === 'username') {
            this.setState({ username: value });
        }
        if (name === 'email') {
            this.setState({ email: value });
        }
        if (name === 'password') {
            this.setState({ password: value });
        }
        if (name === 'confirm-password') {
            this.setState({ confirmPassword: value });
        }
        this.props.signUpFormErrorReset();
    }

    handleSubmit(event) {
        event.preventDefault();

        const { username, email, password, confirmPassword } = this.state;

        this.props.signUp({
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        });

        this.setState({ username: '', email: '', password: '', confirmPassword: ''});
    }

    render() {
        
        let { username, password, confirmPassword, email } = this.props.errors;

        let usernameFormGroupClass = `form-group ${username ? 'has-error': ''}`;
        let usernameHelpText = !username ? (<span></span>) : (<span className="help-block">{username}</span>);

        let emailFormGroupClass = `form-group ${email ? 'has-error': ''}`;
        let emailHelpText = !email ? (<span></span>) : (<span className="help-block">{email}</span>);

        let passwordFormGroupClass = `form-group ${password ? 'has-error': ''}`;
        let passwordHelpText = !password ? (<span></span>) : (<span className="help-block">{password}</span>);

        let passwordConfirmFormGroupClass = `form-group ${confirmPassword ? 'has-error': ''}`;
        let passwordConfirmHelpText = !confirmPassword ? (<span></span>) : (<span className="help-block">{confirmPassword}</span>);

        return (
            <div id="signup">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className={usernameFormGroupClass}>
                        <label htmlFor="username">User name</label>
                        <input
                            className="form-control"
                            labelFor="Username"
                            ref="usernameInput"
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            value={this.state.username}
                            onChange={this.handleChange.bind(this)}
                        />
                        {usernameHelpText}
                    </div>
                    <div className={emailFormGroupClass}>
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            labelFor="email"
                            ref="emailInput"
                            type="text"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)}
                        />
                        {emailHelpText}
                    </div>
                    <div className={passwordFormGroupClass}>
                        <label htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            labelFor="Password"
                            ref="passwordInput"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleChange.bind(this)}
                        />
                    {passwordHelpText}
                    </div>
                    <div className={passwordConfirmFormGroupClass}>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            className="form-control"
                            labelFor="Confirm-Password"
                            ref="confirmPasswordInput"
                            type="password"
                            name="confirm-password"
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
                    Sign Up
                    </button>
                </form>

                <Link to="/signin">
                    <span> Already a user, Sign In </span>
                </Link>
            </div>
        );
    }
}