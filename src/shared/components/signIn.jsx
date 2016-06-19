import React from 'react';
import { Button } from './button';
import {Card, CardActions, CardText} from 'material-ui/Card';
import { Input } from './textField';
import { Link } from 'react-router';
import FormStyles from './styles/forms';

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

        return (
            <Card style={FormStyles}>
                <CardText>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <Input
                            hintText="Email"
                            floatingLabelText="Email"
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange.bind(this)}
                        />
                        <Input
                            hintText="Password"
                            floatingLabelText="Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange.bind(this)}
                        />
                        <Button
                            name="submitButton"
                            type="submit"
                            label="Sign In"
                            style={{ margin: '2em' }}
                        />
                    </form>
                </CardText>
                <CardActions>
                    <Link to="/signup">
                        <span> Or Sign Up </span>
                    </Link>

                    <Link to="/forgot">
                        <span>forgot your password</span>
                    </Link>
                </CardActions>
            </Card>
        );
    }
}
