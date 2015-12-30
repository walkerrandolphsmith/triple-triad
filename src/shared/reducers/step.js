import Immutable from 'immutable';
import _ from 'lodash';
import * as types from './../constants/action-types';

const INITIAL_STATE = new Immutable.Map({
    current: 0
});

export default function reducer(state = INITIAL_STATE, action) {

    switch(action.type){
        case types.NEXT_STEP: return state.set('current', state.get('current')+1);
        case types.RESET_STEP: return INITIAL_STATE;
    }

    return state;
}