import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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
                <RaisedButton
                    label="Invite"
                    labelColor={'white'}
                    backgroundColor={this.context.muiTheme.baseTheme.palette.backgroundColor}
                    onMouseDown={this.invite.bind(this)} />
            </div>
        );
    }
}

InviteForm.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};