var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'app', 'index.js'),
    output: {
        path: path.join(__dirname, 'web'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        progress: true,
        color: true,
        contentBase: './web',
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                loader: 'style!css!stylus'
            },
            {
                test: /\.jade$/,
                exclude: /node_modules/,
                loader: 'jade'
            },
            {
                test: /\.js?$|\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};
