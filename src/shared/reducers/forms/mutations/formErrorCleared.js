import { INITIAL_STATE } from './../index';

export const formErrorCleared = (state, payload) => state.set(payload.form, INITIAL_STATE.get(payload.form));
