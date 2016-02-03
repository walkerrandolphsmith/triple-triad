import React from 'react';

export default class InviteForm extends React.Component {

    update(event) {
        this.setState({
            email: event.target.value
        });
    }

    invite() {
        this.props.sendInvite(this.state.email)
    }

    render() {
        return (
            <div id="invite-form">
                <div className="control-group">
                    <label htmlFor="invite-email">Invite a friend</label>
                    <input type="text" id="invite-email"
                        onChange={this.update.bind(this)}>
                    </input>
                </div>
                <button className="btn btn-next" onClick={this.invite.bind(this)}> Invite</button>
            </div>
        );
    }
}