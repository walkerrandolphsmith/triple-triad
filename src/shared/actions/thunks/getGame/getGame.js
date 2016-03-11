import request from 'superagent';

export function getGame(id) {
    return (dipatch, getState) => {
        const data = JSON.stringify({
            gameId: id
        });

        return request
        .post('/api/get_game')
        .send(data)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end((err, response) => {
            if(response.status === 200){
                console.log(response);
            }else{

            }
        });
    }
}