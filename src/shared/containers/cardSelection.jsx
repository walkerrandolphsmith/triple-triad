import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { gameSelector, handSelector, isFullHandSelector, availableDeckSelector } from './../selectors/index';
import * as Actions from './../actions/';

import React from 'react';
import { Hand, Deck } from './../components';

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
    const { settings } = state;
    
    let game = gameSelector(state);

    return {
        selectedCard: game.get('selectedCard'),
        settings: settings,
        availableDeck: availableDeckSelector(state),
        hand: handSelector(state),
        isHandSelected: isFullHandSelector(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CardSelection);
