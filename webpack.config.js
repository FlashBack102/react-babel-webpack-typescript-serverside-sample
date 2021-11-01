module.exports = function(env) {
  console.log(env.client);
  
  if(env.client) {
    return require(`./webpack.client.js`)
  } else {
    return require(`./webpack.server.js`);
  }
};

/*
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const browserConfig = {
  mode: "production",
  entry: [ './src/browser/index.tsx' ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
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
  ],
}

const serverConfig = {
  mode: "production",
  entry: [ './src/server/index.tsx'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(tsx?)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
    ]
  },
  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: true,
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index_dev.html'
    })
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
 }
}

module.exports = [browserConfig, serverConfig]
*/