module.exports = {
    test:/\.(jpg|png)$/,
    use : [{
        loader:'file-loader',
        options:{
            name:'[name]_[hash:base64:8].[ext]',
            outputPath:'public/',
            //publicPath:'/'
        }
    }]
};
