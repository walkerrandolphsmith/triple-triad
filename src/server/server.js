import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import configurePassport from './config/passport';
import configureRoutes from './config/routes';
import configureServer from './config/server';
import env from './../shared/config/environment';

const { port, mongoUri } = env;

mongoose.connect(mongoUri);

let app = express();
export default app;

configurePassport(passport);
let router = configureRoutes(passport);
configureServer(app, passport, router);

app.listen(port, (error) => {
  if (error) console.error(error);
  else console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});
