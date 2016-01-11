import { END_AI_TURN } from './../../constants/action-types';

export function endAiTurn() {
    return {
        type: END_AI_TURN
    }
}