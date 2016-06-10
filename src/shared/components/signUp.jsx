import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';

export class SignUp extends React.Component {

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
        this.props.clearFormErrors();
    }

    handleSubmit(event) {
        event.preventDefault();

        const { username, email, password, confirmPassword } = this.state;

        this.props.signUp({
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        });

        this.setState({ username: '', email: '', password: '', confirmPassword: ''});
    }

    render() {

        let { username, password, confirmPassword, email } = this.props.errors;

        let usernameFormGroupClass = `form-group ${username ? 'has-error': ''}`;
        let usernameHelpText = !username ? (<span></span>) : (<span className="help-block">{username}</span>);

        let emailFormGroupClass = `form-group ${email ? 'has-error': ''}`;
        let emailHelpText = !email ? (<span></span>) : (<span className="help-block">{email}</span>);

        let passwordFormGroupClass = `form-group ${password ? 'has-error': ''}`;
        let passwordHelpText = !password ? (<span></span>) : (<span className="help-block">{password}</span>);

        let passwordConfirmFormGroupClass = `form-group ${confirmPassword ? 'has-error': ''}`;
        let passwordConfirmHelpText = !confirmPassword ? (<span></span>) : (<span className="help-block">{confirmPassword}</span>);

        const mainColor = this.context.muiTheme.floatingActionButton.backgroundColor;

        const floatingLabelStyle = {
            color: mainColor
        };

        const underlineFocusStyle = {
            borderColor: mainColor
        };

        return (
            <div id="signup">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        hintText="Username"
                        floatingLabelText="Username"
                        name="username"
                        type="text"
                        floatingLabelFocusStyle={floatingLabelStyle}
                        underlineFocusStyle={underlineFocusStyle}
                        value={this.state.username}
                        onChange={this.handleChange.bind(this)}
                    />
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
                    <TextField
                        hintText="Password"
                        floatingLabelText="Password"
                        name="password"
                        type="password"
                        floatingLabelFocusStyle={floatingLabelStyle}
                        underlineFocusStyle={underlineFocusStyle}
                        value={this.state.password}
                        onChange={this.handleChange.bind(this)}
                    />
                    <TextField
                        hintText="Confirm Password"
                        floatingLabelText="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        floatingLabelFocusStyle={floatingLabelStyle}
                        underlineFocusStyle={underlineFocusStyle}
                        value={this.state.confirmPassword}
                        onChange={this.handleChange.bind(this)}
                    />
                    <RaisedButton
                        name="submitButton"
                        type="submit"
                        label="Sign Up"
                        labelColor={'white'}
                        backgroundColor={this.context.muiTheme.raisedButton.backgroundColor}
                        style={{ margin: '2em' }}
                    />
                </form>

                <Link to="/signin">
                    <span> Already a user, Sign In </span>
                </Link>
            </div>
        );
    }
}

SignUp.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
