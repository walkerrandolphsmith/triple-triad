import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handSelector, stepCompleteSelector } from './../selectors/index';
import * as Actions from './../action-creators/';
import { toJS } from 'immutable';

import React from 'react';
import Cards from './../components/cards';

class CardSelection extends React.Component {
    render() {
        let {game, hand, handSelected, addCard, removeCard, nextStep} = this.props;
        let {deck, ownerType} = game;
        let addCardHandler = handSelected ? function(){} : addCard;

        return (
            <div id="card-selection">
                <Cards cards={deck} showBack={false} owner={ownerType.none} clickAction={addCardHandler} />
                <Cards cards={hand} showBack={false} owner={ownerType.player} clickAction={removeCard} />
                <button disabled={!handSelected} onClick={nextStep}> Next step</button>
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
        hand: handSelector(game),
        handSelected: stepCompleteSelector(game)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions,dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CardSelection);
