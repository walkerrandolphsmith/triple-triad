import path from 'path';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import game from './../routes/game';
var config = require('./../../../webpack.config');

export default function(app, passport, router) {
    app.use(cors());
    app.use(passport.initialize());

    if(process.env.NODE_ENV === 'development'){
        app.use(express.static(path.join(__dirname, './../../../src')));

        const dev_port = process.env.DEV_PORT || 3001;
        const compiler = webpack(config);
        app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
        app.use(webpackHotMiddleware(compiler));

        new WebpackDevServer(webpack(config), config.devServer).listen(dev_port, 'localhost', (err, result) => {
            if (err) console.log(err);
            console.info(`==> 🌎 Listening on port ${dev_port}`);
        });
    }else{
        app.use(express.static(path.join(__dirname, './../../../../dist')));
    }
    app.use('/api', router);
    app.get('/*', (request, response) => {
        game(request, response);
    });
}
