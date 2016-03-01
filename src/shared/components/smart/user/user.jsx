import React from 'react';
import { DumbUser } from './../../dumb/';

export class User extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.id);
    }

    resendEmailVerification() {
        this.props.resendEmailVerification(this.props.id);
    }

    render() {
        let { id, username, verified } = this.props;
        let resendVerificationEmail = verified
            ? (<div></div>)
            : (
            <div>
                <button className="btn btn-main" onClick={this.resendEmailVerification.bind(this)}>
                Resend Verifcation Email
                </button>
            </div>
        );

        let message = '';
        message = this.props.resendingVerificationEmail ? 'Sending...' : message;
        message =  this.props.verificationEmailSent ? 'Success' : message;
        message = this.props.failedToSendVerificationEmail ? 'Failed to send' : message;

        return DumbUser(username, resendVerificationEmail, message, this.props.signOut);
    }
}