import { Iterable } from 'immutable';
import sampleImmutable from './sampleImmutable';
import sampleMutable from './sampleMutable';

export default function sample(list, size) {
    return Iterable.isIterable(list) ? sampleImmutable(list, size) : sampleMutable(list, size);
}
