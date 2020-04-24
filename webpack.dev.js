var path = require('path');
var webpackMerge = require('webpack-merge')
var webpackCommon = require('./webpack.common')

module.exports = webpackMerge(
    webpackCommon,
    {
        mode: 'development',
        devServer: {
            host: "0.0.0.0",
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: process.env.port || 9000,
            watchContentBase: true,
            inline: true,
            compress: true,
            open: true, //是否自动打开浏览器
            clientLogLevel: 'error',
            //noInfo: true,
            // https: {
            //     key: fs.readFileSync(path.resolve(__dirname, `ssl/privkey.pem`)),
            //     cert: fs.readFileSync(path.resolve(__dirname, `ssl/server.pem`))
            // },
            disableHostCheck: true,
            historyApiFallback: {
                disableDotRule: true
            },
            //noInfo:true,
            proxy: {
                '/x/xx*': {
                    target: 'https://x.x.x.com',
                    changeOrigin: true,
                    secure: false
                }
            }
        }
    });