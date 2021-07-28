const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: '[name]-[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/i,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.svg$/i,
        use:
          {
            loader: 'svg-url-loader',
          },
      },
    ],
  },
  // helps locating module by using absolute path
  // resolve: {
  //   alias: {
  //     Components: path.resolve(__dirname, 'src/components'),
  //   },
  // },
};
