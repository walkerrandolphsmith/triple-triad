import React from 'react';

export default class User extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.id);
    }

    resendVerificationEmail() {
        this.props.resendVerificationEmail(this.props.id);
    }

    render() {
        let { id, username, verified } = this.props;
        let resendVerificationEmail = verified
            ? (<div></div>)
            : (
            <div>
                <button className="btn btn-next" onClick={this.resendVerificationEmail.bind(this)}>
                Resend Verifcation Email
                </button>
            </div>
        );

        let resending = this.props.resendingVerificationEmail ? 'SEnding ...' : '';
        let sent = this.props.verificationEmailSent  ? 'Success ' : '';
        let failure = this.props.failedToSendVerificationEmail ? 'Failed to send' : '';

        return (
            <div id="user">
                <div>
                    <img heigth="150px" width="150px" src="assets/images/default-user.png"/>
                    <div id="username">{username}</div>

                    <div>{resendVerificationEmail}</div>

                    {resending} {sent} {failure}

                    <button className="btn btn-next" onClick={this.props.signOut}>SignOut</button>
                </div>
            </div>
        );
    }
}