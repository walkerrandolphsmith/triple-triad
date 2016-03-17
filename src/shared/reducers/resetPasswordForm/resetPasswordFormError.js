export default function(state, payload) {
    return state.set(payload['field'], payload['error']);
}