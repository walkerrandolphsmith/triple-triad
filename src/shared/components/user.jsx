import React from 'react';
import { Card } from 'material-ui/Card';

export class User extends React.Component {

    resendEmailVerification() {
        this.props.resendEmailVerification(this.props.id);
    }

    editProfile() {
        this.props.push('/user/edit');
    }

    render() {
        const { tally } = this.props;
        const { username, email, avatar, isVerified } = this.props.user;

        const wins = tally ? tally.wins : 0;
        const loses = tally ? tally.loses : 0;
        const ties = tally ? tally.ties : 0;

        const verifyEmail = isVerified
            ? (<i className="fa fa-check"></i>)
            : (<i className="fa fa-envelope" onClick={this.resendEmailVerification.bind(this)}></i>);

        let message =  email;
        message = this.props.resendingVerificationEmail ? 'Sending verification email' : message;
        message =  this.props.verificationEmailSent ? 'Verification email sent' : message;
        message = this.props.failedToSendVerificationEmail ? 'Failed to send verification email' : message;

        return (
            <Card id="profile">
                <div id="user">
                    <div className="header">
                        <h3 className="title">
                            {verifyEmail}
                            <span>{username}</span>
                            <i className="fa fa-pencil"
                               style={{float: 'right'}}
                               onClick={this.editProfile.bind(this)}>
                            </i>
                        </h3>
                    </div>
                    <div className="detail">
                        <div className="content">


                            <img src={avatar} />
                        </div>
                        <div className="content-info">
                            <div className="sub-note">
                                <span>5 Friends</span>
                            </div>
                            <div className="sub-note">
                                <span>W-{wins} : L-{loses} : T-{ties}</span>
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
            </Card>
        )
    }
}