import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from './button';
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
                            <Button label="Next Step" onMouseDown={this.props.endPhaseHandSelection} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}