import { push } from 'react-router-redux';
import { signOutRequest } from './../actions/signOutRequest';
import { signOutSuccess } from './../actions/signOutSuccess';
import firebase from 'firebase';

export const signOut = () => (dispatch, getState) => {
    dispatch(signOutRequest());
    firebase.auth().signOut().then(() => {
        dispatch(signOutSuccess());
        dispatch(push('/'));
    });
};