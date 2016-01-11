import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handSelector, isFullHandSelector, availableDeckSelector } from './../selectors/index';
import * as Actions from './../actions/';
import { toJS } from 'immutable';

import React from 'react';
import Hand from './../components/hand';
import Deck from './../components/deck';

class CardSelection extends React.Component {
    render() {
        let {availableDeck, hand, isHandSelected, addCard, beginRound} = this.props;

        return (
            <div id="card-selection" className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Deck cards={availableDeck} isHandSelected={isHandSelected} addCard={addCard} />
                        <Hand cards={hand} showBack={false} />
                        <button className="btn btn-next" disabled={!isHandSelected} onClick={beginRound}> Next step</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const game = state.game.toJS();
    const settings = state.settings.toJS();
    return {
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
