import request from 'superagent';
import { endPhase } from './endPhase';

export function sendInvite(email) {
    return dispatch => {
        dispatch(endPhase());
    };
}