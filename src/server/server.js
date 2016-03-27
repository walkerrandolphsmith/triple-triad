import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import http from 'http';
import Socket from 'socket.io';
import configurePassport from './config/passport';
import configureRoutes from './config/routes';
import configureServer from './config/express';
import env from './../shared/config/environment';
import { SERVER } from './../shared/constants/actionTypes';

const { port, mongoUri } = env;

mongoose.connect(mongoUri);

let app = express();
export default app;
let io = Socket();

configurePassport(passport);
const routers = configureRoutes(passport, io);
configureServer(app, passport, routers);

let server = http.Server(app);
io.attach(server);

io.on('connection', socket => {
    console.log('Socket connected: ' + socket.id);
    socket.on('action', action => {
        io.sockets.emit('action', {
            type: action.type.split(SERVER)[1],
            payload: action.payload
        });
    });
});


server.listen(port, error => {
    if(error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});
