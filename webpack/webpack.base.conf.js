const webpack = require("webpack");
const SaveAssets = require("assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require("path");



module.exports = {
    context: path.resolve(__dirname, '../'),

    resolve: {
        modules: [
            'node_modules',
            'src/js'
        ],
        alias: {
            React : 'react'
        },
        extensions: ['.js']        
    },
    plugins: [
        new CleanWebpackPlugin(['../public/dist'], {
            dry: false,
            verbose: false,
            // allowExternal: true
        }),
        new SaveAssets({
            path: path.resolve(__dirname, "../public", "dist"),
            filename: 'bundle.json',
        }),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    },
}