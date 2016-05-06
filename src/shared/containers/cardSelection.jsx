import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CardSelection } from './../components';
import { handSelector, isFullHandSelector, availableDeckSelector, currentGameSelector } from '../ducks/game';
import { addCard, endPhase, selectCard } from '../ducks/game';

function mapStateToProps(state) {
    const { settings } = state;
    
    let game = currentGameSelector(state);

    return {
        selectedCard: game.get('selectedCard'),
        settings: settings,
        availableDeck: availableDeckSelector(state),
        hand: handSelector(state),
        isHandSelected: isFullHandSelector(state)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addCard, endPhase, selectCard },dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CardSelection);
