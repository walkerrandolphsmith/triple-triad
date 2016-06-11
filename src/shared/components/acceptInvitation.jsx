import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from './button';

export class AcceptInvitation extends React.Component {
    acceptInvitation() {
        this.props.endPhaseInvitationHold(this.props.gameId, this.props.invitationToken);
    }

    render() {

        const { gameId, gameOwner, invitationToken } = this.props;
        
        return (
            <div id="accept-invitation">
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <p>{gameId} : {gameOwner} : altogether now {invitationToken}</p>
                            <Button label="Accept Invitation" onMouseDown={this.acceptInvitation.bind(this)} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}