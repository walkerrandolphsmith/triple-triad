import PHASE from './../constants/phases';

export function getNextPhase(currentPhase, settings) {
    let transitions = {
        [PHASE.SETTINGS_SELECTION]: () => PHASE.INVITE,
        [PHASE.INVITE]: settings => {
            if(settings.multiplayer) {
                return PHASE.HOLD
            }else {
                settings.randomHand ? PHASE.CARD_SELECTION : PHASE.HAND_SELECTION
            }
        },
        [PHASE.HAND_SELECTION]: () => PHASE.CARD_SELECTION,
        [PHASE.CARD_SELECTION]: () => PHASE.SETTINGS_SELECTION,
        [PHASE.PIECE_SELECTION]: () => PHASE.SETTINGS_SELECTION
    };
    
    return transitions[currentPhase](settings);
}