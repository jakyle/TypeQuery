 // tslint:disable:object-literal-sort-keys
import { CheckerPlugin, TsConfigPathsPlugin } from 'awesome-typescript-loader';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
const dir = path.resolve(__dirname, 'src/index');
const hot = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000';

export default {
    entry: {
        main: [
            dir,
            hot,
        ],
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.scss', '.sass', '.css' , '.pug'],
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /(node_modules)/,
                options: {
                    formatter: 'stylish',
                    failOnHint: false,
                },
            },
            {   test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
                options: { useBabel: true },
            },
              {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
              },
              {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                minimize: true,
                            },
                        },
                    ],
                }),
              },
              {
                test: /\.pug$/,
                loader: 'pug-loader',
              },
        ],
      },
      plugins: [
        new ExtractTextPlugin('index.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            // tslint:disable-next-line:object-literal-sort-keys
            Popper: ['popper.js', 'default'],
            Tether: 'tether',
        }),
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
            inject: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};
