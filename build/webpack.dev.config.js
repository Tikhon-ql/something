const { merge } = require("webpack-merge");
const path = require("path");

const common = require("./wepback.base.config");

module.exports = merge(common, {
    mode: "development",
    watch: true,
    devtool: "eval",
    devServer:{
        port: 3024,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        historyApiFallback: true,
    }
});
