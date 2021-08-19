const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    },
    plugins: [new BundleAnalyzerPlugin()],
});
