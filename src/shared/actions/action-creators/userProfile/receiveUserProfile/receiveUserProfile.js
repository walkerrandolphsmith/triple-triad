import { USER_PROFILE_SUCCESS } from './../../../../constants/actionTypes';

export function receiveUserProfile(user) {
    return {
        type: USER_PROFILE_SUCCESS,
        payload: {
            user: user
        }
    }
}
