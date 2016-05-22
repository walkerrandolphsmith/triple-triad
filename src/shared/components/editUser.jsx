import React from 'react';

export class EditUser extends React.Component {

    viewProfile() {
        this.props.push('/user');
    }

    render() {
        let { id, username, email, isVerified, avatar } = this.props;

        return (
            <div id="profile">
                <div id="user">
                    <div className="header">
                        <h3 className="title">
                            <span>{username}</span>
                            <i className="fa fa-pencil" style={{float: 'right'}} onClick={this.viewProfile.bind(this)}></i>
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
                                <span>10/35</span>
                            </div>
                        </div>
                        <div className="footer">
                            <span>{email}</span>
                        </div>
                    </div>
                    <div className="more">
                        <span>Message</span>
                    </div>
                </div>
            </div>
        )
    }
}