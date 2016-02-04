import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';

class SignUp extends React.Component {

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
    }

    handleSubmit(event) {
        event.preventDefault();
        const userObj = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };
        this.props.signUp(userObj);
        this.setState({ username: '', email: '', password: '', confirmPassword: ''});
    }

    render() {
        return (
            <div id="signup">
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
                    </div>
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
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
                    </div>
                    <button
                        className="btn btn-next"
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

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)