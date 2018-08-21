const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const JsDocPlugin = require('jsdoc-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const BundleAnalyzer = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const homePageTemplate = '../assets/templates/index.html';
const exclude = /node_modules/;
const JSDocPath = path.resolve(__dirname, 'jsdoc.conf.json');
// const ElevatePortalAssetsPath = path.resolve(__dirname, 'assets');
const PostcssLocalIdentName = '[name]---[local]---[hash:base64:5]';
const lessToJs = require('less-vars-to-js');

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './assets/_ant-theme-vars.less'), 'utf8'));

const commonPlugins = (environment) => {
  const isDev = environment === 'development';
  // const isProd = environment === 'production';
  return [new CleanWebpackPlugin(['dist', 'assets/messages'], { verbose: true }),
    new HtmlWebpackPlugin({
      hash: isDev,
      template: homePageTemplate,
      filename: 'index.html',
      alwaysWriteToDisk: true,
    }),
    new CopyWebpackPlugin([
      '../assets/images/common/favicon.ico',
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment),
      __ENV__: JSON.stringify(environment),
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ];
};

const devPlugins = environment => commonPlugins(environment).concat([
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new JsDocPlugin({
    conf: JSDocPath,
  }),
  new MiniCssExtractPlugin({
    filename: 'style.css',
    allChunks: true,
  }),
  // new BundleAnalyzer.BundleAnalyzerPlugin(),
  new HtmlWebpackHarddiskPlugin(),
]);

const prodPlugins = environment => commonPlugins(environment).concat([
  new MiniCssExtractPlugin({
    filename: 'style.[chunkhash].css',
    allChunks: true,
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
]);

const getPlugins = environment => (environment === 'development' ? devPlugins(environment) : prodPlugins(environment));

module.exports = (environment) => {
  const isDev = environment === 'development';
  const isProd = environment === 'production';
  return {
    context: path.resolve(__dirname, 'src'),
    node: false,
    entry: {
      development: ['./client/index.js', 'webpack-hot-middleware/client'],
      production: ['./client/index.js'],
    }[environment],
    output: {
      filename: isDev ? '[name].bundle.js' : '[name].[chunkhash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devtool: isDev ? 'eval-source-map' : 'false',
    resolve: {
      alias: {
        Bundles: path.resolve(__dirname, 'src/bundles/'),
        Component: path.resolve(__dirname, 'src/component/'),
        Libs: path.resolve(__dirname, 'src/libs/'),
        Middleware: path.resolve(__dirname, 'src/middleware/'),
        AppRedux: path.resolve(__dirname, 'src/redux/'),
        APIRequestHelper: path.resolve(__dirname, 'src/libs/APIRequestHelper'),
        CSS: path.resolve(__dirname, 'assets/css'),
      },
      extensions: ['.js', '.jsx', '.less'],
    },
    plugins: getPlugins(environment),
    mode: environment,
    optimization: {
      minimize: isProd,
      namedModules: true,
      runtimeChunk: true,
      splitChunks: {
        name: false,
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'all',
            name: 'vendor',
            priority: -10,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /(\.js$|\.jsx$)/,
          exclude,
          use: {
            loader: 'babel-loader?cacheDirectory',
          },
        },
        {
          test: /\.(woff|woff2|eot|eot\?iefix|ttf|otf)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
        {
          test: /\.(jpe?g|svg|gif|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]?[hash]',
              },
            },
            {
              loader: 'img-loader',
              options: {
                enabled: process.env.NODE_ENV === 'production',
                gifsicle: {
                  interlaced: false,
                },
                mozjpeg: {
                  progressive: true,
                  arithmetic: false,
                },
                optipng: false, // disabled
                pngquant: {
                  floyd: 0.5,
                  speed: 2,
                },
                svgo: {
                  plugins: [
                    { removeTitle: true },
                    { convertPathData: false },
                  ],
                },
              },
            },
          ],
        }, {
          test: /\.css$/,
          // include: [srcPath],
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: PostcssLocalIdentName,
              },
            }, {
              loader: 'postcss-loader',
            },
          ],
        }, {
          test: /\.less$/,
          // include: [srcPath, antdLibPath],
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            }, {
              loader: 'less-loader',
              options: { javascriptEnabled: true, modifyVars: themeVariables },
            }],
        }, {
          test: /\.html$/,
          loader: 'raw-loader',
        },
      ],
    },
  };
};
