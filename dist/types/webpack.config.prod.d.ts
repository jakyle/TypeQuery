/// <reference types="webpack" />
import * as webpack from 'webpack';
declare const _default: {
    stats: {
        assets: boolean;
        colors: boolean;
        version: boolean;
        hash: boolean;
        timings: boolean;
        chunks: boolean;
        chunkModules: boolean;
    };
    devtool: string;
    watch: boolean;
    entry: {
        vendor: string;
        main: string;
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
            loader: webpack.Loader[];
        } | {
            test: RegExp;
            loader: string;
        })[];
    };
    plugins: any[];
};
export default _default;
