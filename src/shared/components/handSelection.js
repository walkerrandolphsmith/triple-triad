import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import { Hand } from './hand';
import { Deck } from './deck';

export class HandSelection extends React.Component {

    render() {
        let { loggedInUser, gameOwner, availableDeck, selectedCard, hand, isHandSelected, addCard, shiftCardSelectionLeft } = this.props;

        return (
            <div id="hand-selection">
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <Deck loggedInUser={loggedInUser}
                                  gameOwner={gameOwner}
                                  cards={availableDeck}
                                  selectedCard={selectedCard}
                                  isHandSelected={isHandSelected}
                                  addCard={addCard}
                                  shiftCardSelectionLeft={shiftCardSelectionLeft} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <Hand loggedInUser={loggedInUser} gameOwner={gameOwner} cards={hand} showBack={false} clickAction={() => {}} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <RaisedButton
                                label="Next Step"
                                labelColor={'white'}
                                backgroundColor={this.context.muiTheme.baseTheme.palette.backgroundColor}
                                disabled={!isHandSelected}
                                onMouseDown={this.props.endPhaseHandSelection} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

HandSelection.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};