import { SERVER } from './../constants/actionTypes';
import createSocketIoMiddleware from 'redux-socket.io';
export default socket => createSocketIoMiddleware(socket, SERVER);