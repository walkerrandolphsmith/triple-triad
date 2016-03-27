export function getNextPhase(currentPhase, randomHand) {
    let nextPhase;
    switch(currentPhase) {
        case 'settingsSelection':
            nextPhase = 'invite';
            break;
        case 'invite':
            nextPhase = randomHand ? 'round' : 'handSelection';
            break;
        case 'handSelection':
            nextPhase = 'round';
            break;
        case 'cardSelection':
            nextPhase = 'settingsSelection';
            break;
        case 'pieceSelection':
            nextPhase = 'settingsSelection';
            break;
        default: nextPhase = 'settingsSelection';
    }
    return nextPhase;
}