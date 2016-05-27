import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CardSelection } from './../components';
import { handSelector, isFullHandSelector, availableDeckSelector, currentGameSelector } from '../ducks/game';
import { addCard, endPhase, selectCard, shiftCardSelectionLeft } from '../ducks/game';

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
    return bindActionCreators({ addCard, endPhase, selectCard, shiftCardSelectionLeft },dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CardSelection);
