import firebase from 'firebase';
import { push } from 'react-router-redux';
import { signOutSuccess } from './../actions/signOutSuccess';

export const deleteUser = () => (dispatch, getState) => {
    const user = firebase.auth().currentUser;

    user.delete().then(() => {
        dispatch(signOutSuccess());
        dispatch(push('/'));
    });
};