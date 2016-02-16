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

        this.setState({
            usernameError: false,
            passwordError: false,
            passwordMatchError: false,
            emailError: false
        });

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
    }

    handleSubmit(event) {
        event.preventDefault();

        const { username, email, password, confirmPassword } = this.state;
        let errorMessage = null;

        if(!isValidUsername(username)) {
            errorMessage = 'Invalid username';
            this.setState({usernameError: errorMessage});
        }

        if(!isValidPassword(password)){
            errorMessage = 'Invalid password';
            this.setState({passwordError: errorMessage});
        }

        if(!passwordsMatch(password, confirmPassword)){
            errorMessage = 'Passwords must match';
            this.setState({passwordMatchError: errorMessage});
        }

        if(!isValidEmail(email)){
            errorMessage = 'Invalid email address';
            this.setState({emailError: errorMessage});
        }

        if(errorMessage){
            return;
        }

        this.props.signUp({
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        });

        this.setState({ username: '', email: '', password: '', confirmPassword: ''});
    }

    render() {

        let usernameFormGroupClass = `form-group ${this.state.usernameError ? 'has-error': ''}`;
        let usernameHelpText = !this.state.usernameError ? (<span></span>) : (<span className="help-block">{this.state.usernameError}</span>);

        let emailFormGroupClass = `form-group ${this.state.emailError ? 'has-error': ''}`;
        let emailHelpText = !this.state.emailError ? (<span></span>) : (<span className="help-block">{this.state.emailError}</span>);

        let passwordFormGroupClass = `form-group ${this.state.passwordError ? 'has-error': ''}`;
        let passwordHelpText = !this.state.passwordError ? (<span></span>) : (<span className="help-block">{this.state.passwordError}</span>);

        let passwordConfirmFormGroupClass = `form-group ${this.state.passwordMatchError ? 'has-error': ''}`;
        let passwordConfirmHelpText = !this.state.passwordMatchError ? (<span></span>) : (<span className="help-block">{this.state.passwordMatchError}</span>);

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