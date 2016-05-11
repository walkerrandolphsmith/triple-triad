import { signInSuccess } from './../../auth/actions/signInSuccess';
import { signOutSuccess } from './../../auth/actions/signOutSuccess';

export const listenToAuth = () => (dispatch,getState) => {
    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.onAuth(authData => {
        if (authData){
            firebaseRef.child('users').child(authData.uid).once('value', snapshot => {
                const user = snapshot.val();
                dispatch(signInSuccess({
                    id: authData.uid,
                    name: user.name,
                    avatar: user.avatar,
                    email: authData.auth.token.email,
                    isVerified: user.isVerified === 'true' ? true: false
                }));
            });
        } else {
           dispatch(signOutSuccess());
        }
    });
};