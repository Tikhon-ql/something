const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { encode } = require('punycode');

module.exports = {
	context: path.resolve(__dirname, '../'),
	mode: 'development',
	entry: path.resolve(__dirname, '../', 'src', 'index.tsx'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../', 'output'),
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
				test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: './images/',
						  	name: '[name].[ext]',
						  	encoding: true,
						},
					}
				],
			},
			{
				test: /\.s[ac]ss$/i,
				include: [path.resolve(__dirname, '../', 'node_modules'), path.resolve(__dirname, '../', 'src')],
				use: [
				  // Creates `style` nodes from JS strings
				  "style-loader",
				  // Translates CSS into CommonJS
				  "css-loader",
				  // Compiles Sass to CSS
				  "sass-loader",
				],
			  },
			  {
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			  }
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
			template: path.resolve(__dirname, '../', 'public', "index.html"),
			favicon: path.resolve(__dirname, '../', 'public', "favicon.ico")
		}
		),
		new MiniCssExtractPlugin({
			filename: '[name].styles.css',
		}),
	],
	performance : {
		hints : false
	},
	devServer: {
		static: {
		  directory: path.resolve(__dirname, '../', 'output'),
		},
		compress: true,
		port: 9000,
		open: true,
	}
};
