import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handSelector, isFullHandSelector, availableDeckSelector } from './../selectors/index';
import * as Actions from './../actions/';

import React from 'react';
import Hand from './../components/hand/hand';
import Deck from './../components/deck/deck';

class CardSelection extends React.Component {

    render() {
        let {availableDeck, selectedCard, hand, isHandSelected, addCard} = this.props;

        return (
            <div id="card-selection">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <Deck cards={availableDeck} selectedCard={selectedCard} isHandSelected={isHandSelected} addCard={addCard} />
                        <Hand cards={hand} showBack={false} clickAction={() => {}}/>
                        <button className="btn btn-main" disabled={!isHandSelected} onClick={this.props.endPhase}> Next step</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { game, settings } = state;

    return {
        selectedCard: game.get('selectedCard'),
        settings: settings,
        availableDeck: availableDeckSelector(game),
        hand: handSelector(game),
        isHandSelected: isFullHandSelector(game)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CardSelection);
