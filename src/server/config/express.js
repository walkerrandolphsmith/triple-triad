import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import env from './../../shared/config/environment';
var config = require('./../../../webpack.config');

export default function(app, routers) {
    const { nodeEnv, devPort } = env;

    app.use(cors());
    app.use(bodyparser.json());
    app.use('/api', routers.authRouter);
    app.use('/*', routers.gameRouter);

    if(nodeEnv === 'development') {
        app.use(express.static(path.join(__dirname, './../../../src')));

        const compiler = webpack(config);
        app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
        app.use(webpackHotMiddleware(compiler));

        new WebpackDevServer(webpack(config), config.devServer).listen(devPort, 'localhost', err => {
            if(err) {
                console.error(err);
            } else {
                console.info(`==> 🌎 Listening on port ${devPort}`);
            }
        });
    } else {
        app.use(express.static('dist/public'));
    }
}
