const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const commonConfig = {
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: [
                            'babel-loader',
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            mangle: true,
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = [
    // Config 1: For browser environment
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
            filename: 'vue-mdi.min.js',
            libraryTarget: 'window',
            library: 'Mdi'
        }
    }),

    // Config 2: For Node-based development environments
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/Mdi.vue'),
        output: {
            filename: 'vue-mdi.js',
            libraryTarget: 'umd',

            // These options are useful if the user wants to load the module with AMD
            library: 'vue-mdi',
            umdNamedDefine: true
        }
    })
];
