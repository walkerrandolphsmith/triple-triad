import React from 'react';
import { Button } from './button';

export class InviteForm extends React.Component {

    update(event) {
        this.setState({
            email: event.target.value
        });
    }

    invite() {
        this.props.sendInvite(this.props.gameId, this.state.email)
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
                <Button label="Invite" onMouseDown={this.invite.bind(this)} />
            </div>
        );
    }
}