import Immutable from 'immutable';
import _ from 'lodash';
import * as types from './../constants/action-types';

const INITIAL_STATE = new Immutable.Map({
    current: 0
});

export default function reducer(state = INITIAL_STATE, action) {

    switch(action.type){
        case types.NEXT_STEP: return nextStep(state);
    }

    return state;
}

function nextStep(state) {

    var newState = _.cloneDeep(state);

    newState.current++;

    return newState;
}