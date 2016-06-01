import React from 'react';

export class AcceptInvitation extends React.Component {
    acceptInvitation() {
        this.props.endPhaseHold(this.props.gameId, this.props.invitationToken);
    }

    render() {

        const { gameId, gameOwner, invitationToken } = this.props;
        
        return (
            <div id="accept-invitation">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p>{gameId} : {gameOwner} : altogether now {invitationToken}</p>
                        <button className="btn btn-main" onClick={this.acceptInvitation.bind(this)}>Accept Invitation</button>
                    </div>
                </div>
            </div>
        );
    }
}