const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./wepback.base.config');

process.env.BABEL_ENV = 'production';

module.exports = merge(common, {
    mode: 'production',
    devtool: "eval",
    devServer:{
        port: 3024,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        historyApiFallback: true,
    }
});
