const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "./dist",
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: ['file-loader?name=/images/[name].[ext]'],
            exclude: /node_modules/,
            include: __dirname,
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
        }, {
            test: /\.js$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
}