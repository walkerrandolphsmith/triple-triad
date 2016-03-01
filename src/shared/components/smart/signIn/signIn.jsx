import React from 'react';
import { Link } from 'react-router';

export class SignIn extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: ''
        };
    }
    componentDidMount() {

    }
    handleChange(event) {
        if (event.target.name === 'username') {
            this.setState({ username: event.target.value });
        }
        if (event.target.name === 'password') {
            this.setState({ password: event.target.value });
        }

        this.props.clearFormErrors();
    }
    handleSubmit(event) {
        event.preventDefault();

        this.props.signIn({
            username: this.state.username,
            password: this.state.password
        });
    }
    render() {

        let { username, password} = this.props.errors;

        let usernameFormGroupClass = `form-group ${username ? 'has-error': ''}`;
        let usernameHelpText = !username ? (<span></span>) : (<span className="help-block">{username}</span>);

        let passwordFormGroupClass = `form-group ${password ? 'has-error': ''}`;
        let passwordHelpText = !password ? (<span></span>) : (<span className="help-block">{password}</span>);

        return (
            <div id="signin">
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
                    <div className={passwordFormGroupClass}>
                        <label htmlFor="username">Password</label>
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
                    <button className="btn btn-main"
                        name="submitButton"
                        type="submit">
                    Sign In
                    </button>

                </form>

                <Link to="/signup">
                    <span> Or Sign Up </span>
                </Link>

                <Link to="/forgot">
                    <span>forgot your password</span>
                </Link>
            </div>
        );
    }
}
