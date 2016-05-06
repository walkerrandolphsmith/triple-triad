export const formErrorSet = (state, payload) => state.setIn(`${payload.form}.${payload.field}`.split('.'), payload.error);
