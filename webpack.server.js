const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development",
	entry: [ './src/server/index.tsx'],
	target: 'node',
	externals: [nodeExternals()],
	output: {
	  // path: path.resolve(__dirname, './dist'),
	  path: path.resolve(__dirname, './dist'),
	  filename: 'server.js',
	},
	module: {
	  rules: [
	    { test: /\.(tsx?)$/, use: 'babel-loader' },
	    { test: /\.css$/, use: [ MiniCssExtractPlugin.loader, 'css-loader' ]}
	  ]
	},
	plugins: [
	  new webpack.HotModuleReplacementPlugin(),
	  new MiniCssExtractPlugin(),
	  new webpack.DefinePlugin({
	    __isBrowser__: "false"
	  }),
	  /*
	  new HtmlWebpackPlugin({
	    filename: 'index.html',
	    template: 'public/index_dev.html'
	  })
	  */
	],
	resolve: {
	  extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
}