module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: "babel-loader",
            exclude: /node_modules/
        }]
    }
}
