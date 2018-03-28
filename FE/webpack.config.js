var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports ={

    entry:{
        index:'./dev/index.js'
    },
    output:{
        path: path.resolve(__dirname,'build'),
        filename:'[name].js',
        publicPath:'/'
    },

    module:{
        rules:[
            {
                test:/\.scss$/,
                use: [
                    {loader:'style-loader'},
                    {
                        loader:'css-loader',
                        options:{
                            modules: true,
                            camelCase: true,
                            localIdentName: '[name]__[local]__[hash:base64:8]'
                        },
                    },
                    {loader:'sass-loader'},
                ],

            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use : [{
                    loader:'babel-loader',
                    options:{

                        presets: ['env','stage-2','react']
                    }
                }]
            },
            {
                test:/\.html$/,
                use : 'html-loader'
            },
            {
                test:/\.(jpg|png)$/,
                use : [{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'public/',
                        //publicPath:'public/'
                    }
                }]
            }

        ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer:{
        contentBase: "./build",
        inline: true,
        hot: false,
        port: 8080,
        stats: "errors-only",
        historyApiFallback:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'dev/index.html'
        }),
        new CleanWebpackPlugin(['build/*.*'])
    ]

}