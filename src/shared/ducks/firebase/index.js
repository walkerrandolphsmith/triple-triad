import { firebaseReducer } from 'refire'

export const fireBaseBindings = {
    localCounter: {
        path: "counter"
    }
};

export default firebaseReducer(fireBaseBindings);