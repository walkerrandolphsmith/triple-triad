import SERVER from './../constants/socketActionPrefix';
import createSocketIoMiddleware from 'redux-socket.io';
export default socket => createSocketIoMiddleware(socket, SERVER);