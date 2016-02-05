import React from 'react';
import { Link } from 'react-router';

export default class SignIn extends React.Component {

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
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username.length > 0 && this.state.password.length > 0) {
            var userObj = {
                username: this.state.username,
                password: this.state.password
            };
            this.props.signIn(userObj);
            this.setState({ username: '', password: ''});
        }
    }
    render() {
        return (
            <div id="signin">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
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
                    </div>
                    <button className="btn btn-next"
                        name="submitButton"
                        type="submit">
                    Sign In
                    </button>

                </form>

                <Link to="/signup">
                    <span> Or Sign Up </span>
                </Link>
            </div>
        );
    }
}
