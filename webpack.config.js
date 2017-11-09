const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ReactRootPlugin = require('html-webpack-react-root-plugin');

module.exports = {
    entry: './src/index.js',
    devServer: {
        host: process.env.IP,
        port: process.env.PORT
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Currency converter',
            appMountId: 'app',
        }),
        new ReactRootPlugin()
     ],
     output: {
         filename: '[name].bundle.js',
         path: path.resolve(__dirname, 'dist'),
         publicPath: '/'
    }
};