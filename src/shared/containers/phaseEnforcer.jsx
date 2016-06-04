import { connect } from 'react-redux';
import { PhaseEnforcer } from './../components';
import Settings from './settings';
import Invite from './invite';
import { InvitationHold } from './../components';
import { HandSelectionHold } from './../components';
import HandSelection from './handSelection';
import Round from './round';
import GameDetails from './gameDetails';
import PHASE from './../constants/phases';
import { currentGameSelector } from '../ducks/game';

export default function() {

    const mapStateToProps = (state) => {
        const currentGame = currentGameSelector(state);
        const phase = currentGame ? currentGame.phase : PHASE.SETTINGS_SELECTION;
        return {
            phase: phase,
            phases: PHASE,
            componentMap: {
                [PHASE.SETTINGS_SELECTION]: Settings,
                [PHASE.INVITE]: Invite,
                [PHASE.INVITATION_HOLD]: InvitationHold,
                [PHASE.HAND_SELECTION_HOLD]: HandSelectionHold,
                [PHASE.HAND_SELECTION]: HandSelection,
                [PHASE.CARD_SELECTION]: Round,
                [PHASE.PIECE_SELECTION]: Round,
                [PHASE.GAME_OVER]: GameDetails
            }
        }
    };

    return connect(mapStateToProps)(PhaseEnforcer);
}