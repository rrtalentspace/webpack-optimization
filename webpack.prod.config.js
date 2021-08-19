const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
    mode: 'production',
    plugins: [
        new CssMinimizerPlugin(),
        new CompressionWebpackPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
        }),
        new CompressionWebpackPlugin({
            filename: '[path][base].br',
            algorithm: 'brotliCompress',
            test: /\.(js|css|html|svg)$/,
        }),
        new BundleAnalyzerPlugin(),
    ],
});
