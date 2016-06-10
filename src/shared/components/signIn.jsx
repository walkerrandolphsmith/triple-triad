import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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

        const mainColor = this.context.muiTheme.floatingActionButton.backgroundColor;

        const floatingLabelStyle = {
            color: mainColor
        };

        const underlineFocusStyle = {
            borderColor: mainColor
        };

        return (
            <div id="signin">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        hintText="Email"
                        floatingLabelText="Email"
                        name="username"
                        type="text"
                        floatingLabelFocusStyle={floatingLabelStyle}
                        underlineFocusStyle={underlineFocusStyle}
                        value={this.state.username}
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
                    <RaisedButton
                        name="submitButton"
                        type="submit"
                        label="Sign In"
                        labelColor={'white'}
                        backgroundColor={this.context.muiTheme.raisedButton.backgroundColor}
                        style={{ margin: '2em' }}
                    />
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

SignIn.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
