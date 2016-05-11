import { setFormError } from './../../forms/actions/setFormError';
import { sendPasswordResetClear } from './../actions/sendPasswordResetClear';
import { sendPasswordResetFailure } from './../actions/sendPasswordResetFailure';
import { sendPasswordResetRequest } from './../actions/sendPasswordResetRequest';
import { sendPasswordResetSuccess } from './../actions/sendPasswordResetSuccess';

export const sendPasswordReset = email => (dispatch, getState) => {
    dispatch(sendPasswordResetSuccess());

    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.resetPassword({
        email: email
    }, error => {
        if (error) {
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
        } else {
            dispatch(sendPasswordResetRequest());
        }

        setTimeout(() => {
            dispatch(sendPasswordResetClear());
        }, 2500);
    });
};