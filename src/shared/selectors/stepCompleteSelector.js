import { createSelector } from 'reselect';
import _ from 'lodash';

const handSelector = state => state.hand

export const stepCompleteSelector = createSelector(
    [handSelector],
    hand => { return hand.length >= 5 }
);