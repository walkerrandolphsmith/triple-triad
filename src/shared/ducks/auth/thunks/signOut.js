import { push } from 'react-router-redux';
import { signOutRequest } from './../actions/signOutRequest';
import { signOutSuccess } from './../actions/signOutSuccess';

export const signOut = () => (dispatch, getState) => {
    dispatch(signOutRequest());
    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.unauth();
    dispatch(signOutSuccess());
    dispatch(push('/'));
};