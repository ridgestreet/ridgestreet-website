var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


var serverLogHandler = function (err) {
    if (err) { console.log(err); }
    console.log('Listening at localhost:3009');
};

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3009, 'localhost', serverLogHandler);