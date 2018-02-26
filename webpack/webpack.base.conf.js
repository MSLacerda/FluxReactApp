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
            React: 'react'
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
        }, {
            test: /\.js$/,
            exclude: '/node_modules/',
            use: ['babel-loader']
        }, {
            test: /\.html$/,
            exclude: '/node_modules/',
            use: {
                loader: 'html-loader'
            }
        }, {
            test: /\.(scss|css|less)$/,
            use: [{
                loader: "style-loader" 
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }, {

            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: "fonts/[name].[ext]"
                }
            }
        }, {
            test: /\.(jpg|png|svg)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[path][name].[hash].[ext]",
                },
            },
        }, ]
    },
}