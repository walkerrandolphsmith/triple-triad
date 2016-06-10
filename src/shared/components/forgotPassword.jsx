import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export class ForgotPassword extends React.Component {

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

        this.props.clearFormErrors();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.sendPasswordReset(this.state.email)
    }

    render() {
        let { email } = this.props.errors;

        let emailFormGroupClass = `form-group ${email ? 'has-error': ''}`;
        let emailHelpText = !email ? (<span></span>) : (<span className="help-block">{email}</span>);
        return (
            <div id="forgot-email">
                <form onSubmit={this.handleSubmit.bind(this)}>
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
                    <RaisedButton
                        name="submitButton"
                        type="submit"
                        label="Send Email"
                        labelColor={'white'}
                        backgroundColor={this.context.muiTheme.raisedButton.backgroundColor} />
                </form>
                <Link to="/signin">
                    <span>I remember, sign in</span>
                </Link>
            </div>
        );
    }
}

ForgotPassword.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
