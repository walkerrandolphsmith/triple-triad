import React from 'react';
import { Link } from 'react-router';

export default class ResetPassword extends React.Component {

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
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.token, this.state);
        debugger;
    }

    render() {
        return (
            <div id="reset-password">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
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
                    </div>
                    <button
                        className="btn btn-next"
                        name="submitButton"
                        type="submit">
                        Reset Password
                    </button>
                </form>
            </div>
        );
    }
}