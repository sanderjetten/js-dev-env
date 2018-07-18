import webpack from 'webpack';
import path from 'path';

const env = process.env.NODE_ENV;

export default {
  mode: env || 'development',
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: false,
        noInfo: true,
      }),

    // Minify JS
    new webpack.LoaderOptionsPlugin({
           minimize: true
         })
    ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}