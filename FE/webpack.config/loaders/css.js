const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    test:/\.css$/,                     
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
            }
        ]
    })                          
};
