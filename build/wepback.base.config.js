const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, '../output'),
	},
	resolve: {
		extensions: ['.json', '.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
			{
				test: /\.s[ac]ss$/i,
				use: [
				  "style-loader",
				  "css-loader",
				  "sass-loader",
				],
			},
		],
	},
	plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
	]
};
