var webpack  = require("webpack");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3009',
        'webpack/hot/only-dev-server',
        "./src/app"],
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: '/scripts/'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },
            { test: /\.js/, loaders: ["react-hot","jsx?harmony", "babel"], exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};