const merge =  require("merge");
const path = require("path");

const common = require("./webpack.common");

module.exports = merge(common, {
    devServer: {



    }, 

    output: {
        publicPath: path.resolve(__dirname, '../dist/'),
        file: path.resolve(__dirname, '../dist/bundle.[hash].js')
    }
})




