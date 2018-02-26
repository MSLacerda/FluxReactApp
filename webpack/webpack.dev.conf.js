const merge = require("webpack-merge");
const path = require("path");
const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const base = require("./webpack.base.conf");



module.exports = merge(base, {
    devtool: 'inline-source-map',
    entry: {
        main: [
            'babel-polyfill',
            'webpack-dev-server/client?http://localhost:5000',
            'webpack/hot/dev-server',
            './src/index',
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true,
            // Options...
        })
    ],
    output: {
        publicPath: 'http://localhost:5000/dist/',
        filename: '[name].bundle.js'
    }
})