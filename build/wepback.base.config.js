const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, '../output'),
	},
	resolve: {
		extensions: ['.js', '.json', '.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
			{
				test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
				loader: 'url-loader',
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  // Creates `style` nodes from JS strings
				  "style-loader",
				  // Translates CSS into CommonJS
				  "css-loader",
				  // Compiles Sass to CSS
				  "sass-loader",
				],
			  },
		],
	},
	plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
	]
};
