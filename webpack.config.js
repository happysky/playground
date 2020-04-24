var path = require('path');
var webpackMerge = require('webpack-merge')
var webpackCommon = require('./webpack.common')

module.exports = webpackMerge(
    webpackCommon,
    {
        mode: 'production'
    });