import React from 'react';

export class User extends React.Component {

    resendEmailVerification() {
        this.props.resendEmailVerification(this.props.id);
    }

    render() {
        let { id, username, email, verified } = this.props;

        let verifyEmail = verified
            ? (<i className="fa fa-email" onClick={this.resendEmailVerification.bind(this)}></i>)
            : (<i className="fa fa-check"></i>);

        let message =  'email@gmail.com';
        message = this.props.resendingVerificationEmail ? 'Sending verification email' : message;
        message =  this.props.verificationEmailSent ? 'Verification email sent' : message;
        message = this.props.failedToSendVerificationEmail ? 'Failed to send verification email' : message;

        return (
            <div id="profile">
                <div id="user">
                    <div className="header">
                        <h3 className="title">
                            {verifyEmail}
                            <span>{username}</span>
                        </h3>
                    </div>
                    <div className="detail">
                        <div className="content">
                            <img heigth="150px" width="150px" src="assets/images/default-user.png"/>
                        </div>
                        <div className="content-info">
                            <div className="sub-note">
                                <span>5 Friends</span>
                            </div>
                            <div className="sub-note">
                                <span>10/35</span>
                            </div>
                        </div>
                        <div className="footer">
                            <span>{message}</span>
                        </div>
                    </div>
                    <div className="more" onClick={this.props.signOut}>
                        <span>SignOut</span>
                    </div>
                </div>
            </div>
        )
    }
}