import React from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';

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
                            <Button onClick={this.acceptInvitation.bind(this)}>Accept Invitation</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}