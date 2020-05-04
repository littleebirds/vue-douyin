const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode:'development',
    entry:'./src/main.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'build.js',
    },
    devtool: '#source-map',
    devServer :{
        port:8000,
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js',
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                loader:'file-loader',
                options:{
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    }
                }
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin(),
    ])
  }