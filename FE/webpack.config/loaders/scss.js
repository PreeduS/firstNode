const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    test:/\.scss$/,                     
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',                           
                options: {
                        modules: true,
                        camelCase: true,
                        localIdentName: '[name]__[local]__[hash:base64:8]',
                        minimize: true,
                        sourceMap: true
                }
            }, 
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
    })       
};

//temp
/*
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

},*/