import React from 'react';
import { Hand } from './hand';
import { Deck } from './deck';
import { Grid, Row, Col, Button } from 'react-bootstrap';

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
                            <Button disabled={!isHandSelected} onClick={this.props.endPhaseHandSelection}>
                                Next step
                            </Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}