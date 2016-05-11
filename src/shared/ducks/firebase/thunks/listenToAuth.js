import { signInSuccess } from './../../auth/actions/signInSuccess';
import { signOutSuccess } from './../../auth/actions/signOutSuccess';

export const listenToAuth = () => (dispatch,getState) => {
    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.onAuth(authData => {
        if (authData){
            dispatch(signInSuccess({
                id: authData.uid,
                name: 'still unknown'
            }));
        } else {
           dispatch(signOutSuccess());
        }
    });
};