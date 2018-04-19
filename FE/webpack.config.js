const path = require('path');
const webpack = require('webpack');
//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const entry = './dev';
const output = './build';
const isProd = false;//temp //process.env.NODE_ENV



module.exports = {
    entry:{
        index: entry
    },
    output:{
        path: path.resolve(__dirname, output),
        filename:'[name].js',
        publicPath:'/'
    },

    module:{
        rules:[
            require('./webpack.config/loaders/css'),
            require('./webpack.config/loaders/scss'),
            require('./webpack.config/loaders/babel'),
            require('./webpack.config/loaders/file'),
        ]
    },
    devtool: isProd ? 'source-map' : 'eval-source-map',
    devServer:{
        contentBase: output,
        inline: true,
        hot: false,
        port: 8080,
        stats: "errors-only",
        historyApiFallback:true
    },
    resolve:{
        alias:{
           '~': path.resolve(__dirname, entry),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: entry+ '/index.html',
            minify:{
                collapseWhitespace: isProd
            }            
        }),
        new CleanWebpackPlugin([output+'/*.*']),
        new ExtractTextPlugin({
            filename: 'styles.css',
            disable: !isProd        //not compatible with React Hot Loader
        }),   
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': !isProd ? '"development"' : '"production"'
        }),             
    ].concat(!isProd ? [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]:[])

}
