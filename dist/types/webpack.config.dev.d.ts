/// <reference types="webpack" />
import * as webpack from 'webpack';
declare const _default: {
    entry: {
        main: string[];
    };
    target: string;
    output: {
        path: string;
        publicPath: string;
        filename: string;
    };
    resolve: {
        extensions: string[];
    };
    module: {
        rules: ({
            enforce: string;
            test: RegExp;
            loader: string;
            exclude: RegExp;
            options: {
                formatter: string;
                failOnHint: boolean;
            };
        } | {
            test: RegExp;
            loader: string;
            exclude: RegExp;
            options: {
                useBabel: boolean;
            };
        } | {
            test: RegExp;
            loaders: string[];
            exclude: RegExp;
        } | {
            test: RegExp;
            loader: string;
        })[];
    };
    plugins: webpack.HotModuleReplacementPlugin[];
};
export default _default;
