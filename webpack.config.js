const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve : {
        extensions: ['.js'],
    },
    module: {
        rules:[
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.jpg/,
                type: 'asset/resource'
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
              },
              {
                test:/\.(woff|woff2)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "aplication/font-woff",
                        name: "[name].[ext]",
                        outputPath: "./assets/fonts/",
                        publicPath: "./assets/fonts/",
                        esModule: false,
                    }
                }
              },
        ]
    },

  

    plugins: [
        new HtmlWebpackPlugin({
            inyect: true,
            template: './public/index.html',
            filename: './index.html'
        }),

        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
          }),
        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/tablet.css',
            to: '' }],
          }),
        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/desktop.css',
            to: '' }],
          }),
        new CopyWebpackPlugin({
            patterns: [{ from: path.resolve(__dirname,"src","assets/fonts"),
            to: 'assets/fonts' }],
          }),
    ]
}