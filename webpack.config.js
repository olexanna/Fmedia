const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	entry: "./source/main.js",
	output: {
		path: path.join(__dirname, "/release"),
		filename: "main.js"
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader" ]
			},
			{
				test: /\.scss$/,
				use: [ "style-loader", "css-loader", "sass-loader" ]
			}
		]
	},
	resolve: {
		alias: {
			"@styles": path.resolve( __dirname, "assets/styles" ),
			"@components": path.resolve( __dirname, "source/components" ),
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./source/index.html"
		})
	],
	devServer: {
		hot: false,
		inline: false,
		port: 5000
	}
};