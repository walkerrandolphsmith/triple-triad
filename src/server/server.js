import express from 'express';
import configureRoutes from './config/routes';
import configureServer from './config/express';
import env from './../shared/config/environment';

const { host, port } = env;

let app = express();
export default app;

const routers = configureRoutes();
configureServer(app, routers);

app.listen(port, error => {
    if(error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://${host}:${port}/ in your browser.`);
    }
});
