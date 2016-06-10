import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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

        const mainColor = this.context.muiTheme.floatingActionButton.backgroundColor;

        const floatingLabelStyle = {
            color: mainColor
        };

        const underlineFocusStyle = {
            borderColor: mainColor
        };

        return (
            <div id="forgot-email">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        hintText="Email"
                        floatingLabelText="Email"
                        name="email"
                        type="text"
                        floatingLabelFocusStyle={floatingLabelStyle}
                        underlineFocusStyle={underlineFocusStyle}
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                    />
                    <RaisedButton
                        name="submitButton"
                        type="submit"
                        label="Send Email"
                        labelColor={'white'}
                        backgroundColor={this.context.muiTheme.raisedButton.backgroundColor}
                        style={{ margin: '2em' }}
                    />
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
