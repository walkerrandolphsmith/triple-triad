import request from 'superagent';
import { push } from 'react-router-redux';
import { signOutRequest } from './../actions/signOutRequest';
import { signOutSuccess } from './../actions/signOutSuccess';

export const signOut = () => dispatch => {
    dispatch(signOutRequest());
    return request
        .get('/api/signOut')
        .end((error, response) => {
            if(response.status === 200) {
                dispatch(signOutSuccess());
                dispatch(push('/'));
            }
        });
};