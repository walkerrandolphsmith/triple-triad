import { Iterable } from 'immutable';
import sampleImmutable from './sampleImmutable';
import sampleMutable from './sampleMutable';

export const sample = (list, size) => Iterable.isIterable(list) ? sampleImmutable(list, size) : sampleMutable(list, size);