const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			Styles: path.resolve(__dirname, 'src/styles/'),
			Icons: path.resolve(__dirname, 'src', 'assets', 'icons'),
			Logos: path.resolve(__dirname, 'src', 'assets', 'logos'),
			Pages: path.resolve(__dirname, 'src', 'pages'),
			Containers: path.resolve(__dirname, 'src', 'containers'),
			Components: path.resolve(__dirname, 'src', 'components'),
			Routes: path.resolve(__dirname, 'src', 'routes'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				// test: /\.s[ac]ss$/i,
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset',
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
};
