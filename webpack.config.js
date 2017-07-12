module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/bundle',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
            // loader: 'css-loader?modules=true' ==> it will make materialize css also local
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader',
            options: {
                // Limit at 50k. Above that it emits separate files
                limit: 50000,

                // url-loader sets mimetype if it's passed.
                // Without this it derives it from the file extension
                mimetype: 'application/font-woff',

                // Output below fonts directory
                name: './fonts/[name].[ext]',
            },
        }]
    }
}