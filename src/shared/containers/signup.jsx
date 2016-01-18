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
        if (name === 'password') {
            this.setState({ password: value });
        }
        if (name === 'confirm-password') {
            this.setState({ confirmPassword: value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username.length && this.state.password.length && this.state.confirmPassword.length) {
            const userObj = {
                username: this.state.username,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            };
            this.props.signUp(userObj);
            this.setState({ username: '', password: '', confirmPassword: ''});
        }
    }

    validateUsername() {
        const { userValidation } = this.props;
        if (userValidation.filter(user => {
                return user === this.state.username.trim();
            }).length > 0) {
            return 'error';
        }
        return 'success';
    }

    validateConfirmPassword() {
        if (this.state.confirmPassword.length > 0 && this.state.password.length > 0) {
            if (this.state.password === this.state.confirmPassword) {
                return 'success';
            }
            return 'error';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        labelFor="Username"
                        ref="usernameInput"
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value={this.state.username}
                        onChange={this.handleChange.bind(this)}
                    />
                    <input
                        labelFor="Password"
                        ref="passwordInput"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handleChange.bind(this)}
                    />
                    <input
                        labelFor="Confirm-Password"
                        ref="confirmPasswordInput"
                        type="password"
                        name="confirm-password"
                        placeholder="Confirm password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange.bind(this)}
                    />
                    <button
                        className="btn btn-next"
                        name="submitButton"
                        type="submit" >
                        <p>Sign Up</p>
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