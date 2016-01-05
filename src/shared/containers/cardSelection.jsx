import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handSelector, isFullHandSelector, availableDeckSelector } from './../selectors/index';
import * as Actions from './../action-creators/';
import { toJS } from 'immutable';

import React from 'react';
import Hand from './../components/hand';
import Deck from './../components/deck';

class CardSelection extends React.Component {
    render() {
        let {availableDeck, game, hand, isHandSelected, addCard, removeCard, nextStep} = this.props;
        let addCardHandler = isHandSelected ? function(){} : addCard;

        return (
            <div id="card-selection">
                <Deck cards={availableDeck} isHandSelected={isHandSelected} clickAction={addCardHandler} />
                <Hand cards={hand} showBack={false} clickAction={removeCard} />
                <button disabled={!isHandSelected} onClick={nextStep}> Next step</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const game = state.game.toJS();
    const settings = state.settings.toJS();
    return {
        game: game,
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
