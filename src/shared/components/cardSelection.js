import React from 'react';
import { Hand } from './hand';
import { Deck } from './deck';

export class CardSelection extends React.Component {

    render() {
        let {availableDeck, selectedCard, hand, isHandSelected, addCard} = this.props;

        return (
            <div id="card-selection">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <Deck cards={availableDeck}
                              selectedCard={selectedCard}
                              isHandSelected={isHandSelected}
                              addCard={addCard}
                        />
                        <Hand cards={hand}
                              showBack={false}
                              clickAction={() => {}}
                        />
                        <button className="btn btn-main"
                                disabled={!isHandSelected}
                                onClick={this.props.endPhase}>
                            Next step
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}