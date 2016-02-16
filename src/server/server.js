import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import http from 'http';
import Socket from 'socket.io';
import configurePassport from './config/passport';
import configureRoutes from './config/routes';
import configureServer from './config/express';
import env from './../shared/config/environment';

const { port, mongoUri } = env;

mongoose.connect(mongoUri);

let app = express();
export default app;

configurePassport(passport);
const routers = configureRoutes(passport);
configureServer(app, passport, routers);

let server = http.Server(app);
let io = Socket.listen(server);

io.on('connection', socket => {
  socket.emit('serverEvent', { hello: 'world' });
  socket.on('clientEvent', data => {
    console.log(data);
  });
});


server.listen(port, (error) => {
  if (error) console.error(error);
  else console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});
