import { SET_FIREBASE_REF } from './../index';

export const setRef = ref => ({
    type: SET_FIREBASE_REF,
    payload: {
        value: ref
    }
});