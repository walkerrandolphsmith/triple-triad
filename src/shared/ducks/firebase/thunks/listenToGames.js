export const listenToGames = () => (dispatch, getState) => {
    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.child('games').on('value', snapshot => {
        let games = snapshot.val();

    });
};