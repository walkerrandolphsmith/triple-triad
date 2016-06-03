import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HandSelection } from './../components';
import { handSelector, isFullHandSelector, availableDeckSelector, currentGameSelector } from '../ducks/game';
import { addCard, endPhaseHandSelection, selectCard, shiftCardSelectionLeft } from '../ducks/game';

function mapStateToProps(state) {
    const { settings } = state;
    
    let game = currentGameSelector(state);

    return {
        selectedCard: game.selectedCard,
        settings: settings,
        availableDeck: availableDeckSelector(state),
        hand: handSelector(state),
        isHandSelected: isFullHandSelector(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addCard, endPhaseHandSelection, selectCard, shiftCardSelectionLeft },dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(HandSelection);
