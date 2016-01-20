/*export default function sample(list, size){
    if(size === undefined){
        let index = getIndex(list.size);
        return list.get(index);
    }
    let indexes = getIndexes(list.size, size);
    return indexes.map(i => list.get(i));
}

function getIndexes(listSize, size){
    let counter = 0;
    let indexes = [];
    while(counter < size){
        let index = getIndex(listSize);
        if(indexes.indexOf(index) < 0) {
            indexes.push(index);
            counter++;
        }
    }
    return indexes;
}

function getIndex(listSize){
    return Math.floor(Math.random() * (listSize -1));
}*/


export default function sample(list, size){
    if(size === undefined){
        let index = getIndex(list.length);
        return list[index];
    }
    let indexes = getIndexes(list.length, size);
    return indexes.map(i => list[i]);
}

function getIndexes(listSize, size){
    let counter = 0;
    let indexes = [];
    while(counter < size){
        let index = getIndex(listSize);
        if(indexes.indexOf(index) < 0) {
            indexes.push(index);
            counter++;
        }
    }
    return indexes;
}

function getIndex(listSize){
    return Math.floor(Math.random() * (listSize -1));
}