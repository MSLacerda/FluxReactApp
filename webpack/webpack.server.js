const { URL } = require("url") 
const colors = require("colors")
const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const devConf = require("./webpack.dev.conf");
const { spawn, exec } = require('child_process')
const path = require("path");
const backend = new URL('http://localhost:3000')


const assets = new URL(devConf.output.publicPath);

new WebpackDevServer( webpack(devConf), {
    publicPath: assets.href,
    hot: true,
    inline: true,
    noInfo: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': backend.origin }
}).listen(assets.port, assets.hostname, (error, result) => {

    if (!!error) console.log(error)
    else {
        console.log('---------------------------------------------------------'.cyan);
        console.log("|                                                       |".cyan);
        console.log('|              Assets Server Listening On:              |'.blue);
        console.log('                  '+ assets.origin + '                    '.blue);
        console.log("|                                                       |".cyan);
        console.log('---------------------------------------------------------'.cyan);


        startBackEnd()
    }
})

function startBackEnd() {
    console.log("Starting app...".green);

    const instance = spawn('node', ['./bin/www']);

    instance.stdout.on('data', (data) => {
        console.log(`Server Said >  ${data}`.green);
    });

    instance.stderr.on('data', (data) => {
        console.log(`stdout: ${data}`.red);
    })

    instance.on('close', (code) => {
        console.log(`exiting with code: ${code}`.red);
    })
}









