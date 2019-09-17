const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        'babel-polyfill',
        path.join(__dirname, 'src', 'App.js'),
    ],
    output: {
        filename: 'build.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            query: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }, {
            test: /\.styl$/,
            use: ['style-loader', {
                loader: 'css-loader'
            }, 'stylus-loader'],
            exclude: /node_modules/,
        }]
    },
    plugins: [
        new HtmlPlugin({
            title: 'My react application',
            template: path.join(__dirname, 'src', 'index.ejs'),
            hash: true,
        })
    ]
}
