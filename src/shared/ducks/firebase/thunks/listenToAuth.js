import { signInSuccess } from './../../auth/actions/signInSuccess';
import { signOutSuccess } from './../../auth/actions/signOutSuccess';
import firebase from 'firebase';
import { listenToGames } from './listenToGames';

export const listenToAuth = () => (dispatch, getState) => {
    const auth = firebase.auth();
    auth.onAuthStateChanged(user => {
        if (user){
            getState().firebase.get('ref')
                .child('users')
                .child(user.uid)
                .once('value', snapshot => {
                    const u = snapshot.val();
                    dispatch(signInSuccess({
                        id: user.uid,
                        username: u.name,
                        avatar: u.avatar,
                        email: user.email,
                        isVerified: u.isVerified
                    }));
                    dispatch(listenToGames());
                });
        } else {
           dispatch(signOutSuccess());
        }
    });
};