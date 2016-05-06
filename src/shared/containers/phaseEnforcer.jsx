import { connect } from 'react-redux';
import { PhaseEnforcer } from './../components';
import Settings from './settings';
import Invite from './invite';
import CardSelection from './cardSelection';
import Round from './round';
import PHASE from './../constants/phases';
import { currentGameSelector } from '../ducks/game';



export default function() {

    const mapStateToProps = (state) => {
        const currentGame = currentGameSelector(state);
        const phase = currentGame ? currentGame.get('phase') : PHASE.SETTINGS_SELECTION;
        return {
            path: state.routing.locationBeforeTransitions.pathname,
            rollupPhase: (phase === PHASE.CARD_SELECTION || phase === PHASE.PIECE_SELECTION) ? 'round' : phase,
            phases: PHASE,
            componentMap: {
                [PHASE.SETTINGS_SELECTION]: Settings,
                [PHASE.INVITE]: Invite,
                [PHASE.HAND_SELECTION]: CardSelection,
                ['round']: Round
            }
        }
    };

    return connect(mapStateToProps)(PhaseEnforcer);
}