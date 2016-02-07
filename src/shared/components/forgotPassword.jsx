import React from 'react';
import { Link } from 'react-router';

export default class ForgotPassword extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: ''
        };
    }
    componentDidMount() {

    }
    handleChange(event) {
        const { name, value } = event.target;

        if (name === 'email') {
            this.setState({ email: value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div id="forgot-email">
                <form onSubmit={this.handleSubmit.bind(this)}>
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
                    <button
                        className="btn btn-next"
                        name="submitButton"
                        type="submit">
                        Send email
                    </button>
                </form>
            </div>
        );
    }
}