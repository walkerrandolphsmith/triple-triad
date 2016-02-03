import request from 'superagent';
import { updateRoute } from './updateRoute';

export function sendInvite(email) {
    return dispatch => {
        dispatch(updateRoute());
    };
}