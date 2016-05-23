import React from 'react';
import firebase from 'firebase';

export class UserEdit extends React.Component {

    viewProfile() {
        this.props.push('/user');
    }

    chooseFile() {
        const eventClick = new Event('click');
        document.getElementById('fileselect').dispatchEvent(eventClick);
    }

    save() {

    }

    updateAvatar(event) {
        for(var i = 0; i < event.target.files.length; i++) {
            const file = event.target.files[i];
            this.props.updateAvatar(file);
        }


    }

    render() {
        let { id, username, email, isVerified, avatar } = this.props;

        return (
            <div id="profile">
                <div id="user">
                    <div className="header">
                        <h3 className="title">
                            <span>{username}</span>
                            <i className="fa fa-pencil"
                               style={{float: 'right'}}
                               onClick={this.viewProfile.bind(this)}>
                            </i>
                        </h3>
                    </div>
                    <div className="detail">
                        <div className="content">
                            <form id="fileupload" name="fileupload" encType="multipart/form-data">
                                <div className="edit-avatar"
                                     onClick={this.chooseFile}
                                     style={{ backgroundImage: `url(${avatar})`, backgroundSize: 'contain' }}>
                                    <p>
                                        <i className="fa fa-camera"></i>
                                    </p>
                                </div>
                                <input id="fileselect"
                                       type="file"
                                       name="fileselect"
                                       onChange={this.updateAvatar.bind(this)}
                                />
                            </form>
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
                    <div className="more" onClick={this.save}>
                        <span>Save</span>
                    </div>
                </div>
            </div>
        )
    }
}