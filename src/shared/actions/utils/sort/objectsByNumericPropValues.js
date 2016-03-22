export default (tuples) => {
    return tuples.sort((x, y) => {
        if(x.index > y.index){
            return 1;
        }
        if(x.index < y.index) {
            return -1
        }
        return 0;
    });
}