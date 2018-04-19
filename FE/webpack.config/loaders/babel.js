module.exports = {
    test:/\.js$/,
    exclude:/node_modules/,
    use : [{
        loader:'babel-loader',
        options:{
            presets: ['env','stage-2','react'],
            //plugins: ["react-hot-loader/babel"]
        }
    }]
};
