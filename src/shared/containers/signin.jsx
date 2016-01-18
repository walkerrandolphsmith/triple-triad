import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';

class SignIn extends React.Component {

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
        debugger;
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
                        <label for="username">User name</label>
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
                        <label for="username">Password</label>
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
                        type="submit" >
                        <p>Sign In</p>
                    </button>

                </form>

                <Link to="/signup">
                    <span> Or Sign Up </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)