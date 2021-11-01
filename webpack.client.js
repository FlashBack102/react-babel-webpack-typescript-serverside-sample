const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const hotMiddlewareScript = `webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true`;

module.exports= {
	mode: "development",
	entry: [ 'webpack-hot-middleware/client', './src/browser/index.tsx' ],
	output: {
	  // path: path.resolve(__dirname, './dist'),
	  path: path.resolve(__dirname, './dist'),
	  filename: 'bundle.js',
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
	    __isBrowser__: "true"
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