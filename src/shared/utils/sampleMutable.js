const getIndex = listSize => Math.floor(Math.random() * (listSize -1));

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

export default function sampleMutable(list, size){
    if(size === undefined){
        let index = getIndex(list.length);
        return list[index];
    }
    let indexes = getIndexes(list.length, size);
    return indexes.map(i => list[i]);
}
