export const listenToGames = () => (dispatch, getState) => {
    debugger;
    const firebaseRef = getState().firebase.get('ref');
    firebaseRef.child('counter').on('value', snapshot => {
        let value = snapshot.val();
        debugger;
    });
};