import { USER_PROFILE_SUCCESS } from './../index';
export const userProfileSuccess = user => ({
    type: USER_PROFILE_SUCCESS,
    payload: {
        user: user
    }
});