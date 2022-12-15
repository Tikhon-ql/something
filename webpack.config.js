const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'output'),
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
			{ 
				test: /\.svg$/, 
				use: 'svg-inline-loader' 
			}
		],
	},
	plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', "index.html") }),
	],
	optimization: {
		minimize: true
	},
	devServer: {
		static: {
		  directory: path.resolve(__dirname, 'output'),
		},
		compress: true,
		port: 9000,
		open: true,
	}
};
