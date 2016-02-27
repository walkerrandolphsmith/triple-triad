import tokenGenerator from './../tokenGenerator/tokenGenerator';

export default function(tokenType, id, fn) {
    tokenGenerator(id).then((token, err) => {
        tokenType.token = token;
        tokenType.userId = id;
        tokenType.save(fn);
    });
}