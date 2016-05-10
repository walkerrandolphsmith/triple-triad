import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import configurePassport from './config/passport';
import configureRoutes from './config/routes';
import configureServer from './config/express';
import env from './../shared/config/environment';

const { host, port, mongoUri } = env;

mongoose.connect(mongoUri);

let app = express();
export default app;

configurePassport(passport);
const routers = configureRoutes(passport);
configureServer(app, passport, routers);

app.listen(port, error => {
    if(error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://${host}:${port}/ in your browser.`);
    }
});
