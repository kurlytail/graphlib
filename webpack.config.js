/* eslint-disable no-console */

const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyEsPlugin = require('uglify-es-webpack-plugin');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');

const CircularDependencyPlugin = require('circular-dependency-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDebug = process.env.NODE_ENV === 'debug';
const isDist = isDebug || isProd ? '.min' : '';
const distPath = path.join(__dirname, 'dist');
const showConfigOnly = '1' === process.env.SHOW_CONFIG_ONLY || 'true' === process.env.SHOW_CONFIG_ONLY;

const config = {
    entry: {
        app: './src/js/index.jsx'
    },
    output: {
        filename: `[name]${isDist}.js`,
        path: distPath,
        pathinfo: !isProd,
        libraryTarget: 'var'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.jsx', '.js'],
        modules: ['node_modules', 'src']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'graphlib',
            filename: 'index.html',
            template: './src/js/html.jst',
            hash: true
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(isProd ? 'production' : 'development')
            }
        }),

        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: false
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[local]'
                },
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                include: path.join(__dirname, 'node_modules')
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: ['file-loader']
            },
            {
                exclude: /node_modules/,
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                enforce: 'pre',
                use: [
                    'source-map-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true
                        }
                    }
                ]
            },

            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            },

            {
                test: /\.js$/,
                enforce: 'pre',
                use: [
                    'source-map-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true
                        }
                    }
                ]
            }
        ]
    },

    target: 'web'
};

if (isProd) {
    config.plugins.push(
        new UglifyEsPlugin({
            mangle: true,
            compress: true
        })
    );
}

// If ran with SHOW_CONFIG_ONLY=1|true, only show the config and exit cleanly
if (showConfigOnly) {
    console.log(chalk.black.bgYellow.bold('Showing Configuration Only:'));
    console.log(require('util').inspect(config, false, null));
    process.exit(0);
}

module.exports = config;
