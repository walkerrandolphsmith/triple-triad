import firebase from 'firebase';
import { setFormError } from './../../forms/actions/setFormError';
import { sendPasswordResetClear } from './../actions/sendPasswordResetClear';
import { sendPasswordResetFailure } from './../actions/sendPasswordResetFailure';
import { sendPasswordResetRequest } from './../actions/sendPasswordResetRequest';
import { sendPasswordResetSuccess } from './../actions/sendPasswordResetSuccess';

export const sendPasswordReset = email => (dispatch, getState) => {
    dispatch(sendPasswordResetRequest());

    var auth = firebase.auth();
    auth.sendPasswordResetEmail(email).then(() => {
        dispatch(sendPasswordResetSuccess());
    }, error => {
        let errorMap = {
            'INVALID_USER': setFormError({
                form: 'resetPassword',
                field: 'email',
                error: 'This user does not exist'
            })
        };

        const action = errorMap[error.code];
        if(action) {
            dispatch(action);
        }
        dispatch(sendPasswordResetFailure());
    }).then(() => {
        setTimeout(() => {
            dispatch(sendPasswordResetClear());
        }, 2500);
    });
};