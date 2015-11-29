var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'app', 'index.js'),
    output: {
        path: path.join(__dirname, 'web'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.styl$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'style!css!stylus'
            },
            {
                test: /\.jade$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'jade'
            },
            {
                test: /\.js?$|\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    cacheDirectory: true
                }
            }
        ]
    }
};
