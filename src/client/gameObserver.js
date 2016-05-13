import diff from 'immutablediff';
export const observeStore = (store, select, onChange) => {
    let currentState;

    const handleChange = () => {
        let nextState = select(store.getState());
        if (nextState !== currentState) {
            onChange(currentState, nextState, store.getState().firebase.get('ref'));
            currentState = nextState;
        }
    };

    return store.subscribe(handleChange);
    //handleChange();
    //return unsubscribe;
};

export const onChange = (currentState, nextState, ref) => {
    let diffs = diff(nextState, currentState);
    let firstDiff = diffs.get(0);
    if(firstDiff){
        let path = firstDiff.get('path');
        path = path.substring(1, path.length);
        let value = firstDiff.get('value');
        let pathElms = path.split('/');
        if(value && pathElms) {
            let id = nextState.get(pathElms.shift()).get('id');
            let node = ref.child('games').child(id);
            for (var i = 0; i < pathElms.length; i++) {
                node = node.child(pathElms[i]);
            }
            node.set(value);
        }
    }
};

export const select = state => state.game.get('games');