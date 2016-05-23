import firebase from 'firebase';
import { updateAvatarSuccess } from './../actions/updateAvatarSuccess';

export const updateAvatar = file => (dispatch, getState) => {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child('images/' + file.name).put(file);
    uploadTask.on('state_changed', snapshot => {

    }, error => {

    }, () => {
        const downloadURL = uploadTask.snapshot.downloadURL;

        const id = getState().auth.get('user').get('id');
        const firebaseAuth = getState().firebase.get('ref');
        firebaseAuth.child('users').child(id).child('avatar').set(downloadURL);

        dispatch(updateAvatarSuccess(downloadURL));
    });
};