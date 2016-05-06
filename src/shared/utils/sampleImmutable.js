import { List } from 'immutable';

const getIndex = listSize => Math.floor(Math.random() * (listSize - 1));

function getIndexes(listSize, size) {
    let counter = 0;
    let indexes = new List([]);
    while(counter < size) {
        let index = getIndex(listSize);
        if(indexes.indexOf(index) < 0) {
            indexes = indexes.set(counter, index);
            counter++;
        }
    }
    return indexes;
}

export default function sampleImmutable(list, size) {
    if(typeof size === 'undefined') {
        let index = getIndex(list.size);
        return list.get(index);
    }
    let indexes = getIndexes(list.size, size);
    return indexes.map(i => list.get(i));
}
