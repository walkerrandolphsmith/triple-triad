export const deleteGame = id => (dispatch, getState) => getState()
    .firebase
    .get('ref')
    .child('games')
    .child(id)
    .remove();