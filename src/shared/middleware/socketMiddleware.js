import createSocketIoMiddleware from 'redux-socket.io';
export default socket => createSocketIoMiddleware(socket, "server/");