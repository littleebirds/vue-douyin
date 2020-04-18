const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:'./src/main.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'build.js',
    },
    devServer :{
        historyApiFallBack: true,
        overlay: true
    }
}