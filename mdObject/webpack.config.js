const { merge } = require('webpack-merge');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = () => {

    const commonConfig = {
        mode: 'development',
        stats: { modules: false },
        entry: './src/index.ts',
        output: {
            filename: 'bundle.js',
            path: __dirname + '/lib',
            library: 'MdObject',
            libraryTarget: 'umd'
        },
        /** Enable sourcemaps for debugging webpack's output. */
        devtool: 'source-map',
        /** Add '.ts' as resolvable extensions. */
        resolve: { extensions: ['.ts'] },
        module: {
            rules: [
                /** All files with a '.ts' extension will be handled by 'awesome-typescript-loader'. */
                { test: /\.ts$/, use: 'awesome-typescript-loader' }
            ]
        },
        plugins: [new CheckerPlugin()]
    };

    const uglifyConfig = merge(commonConfig, {
        mode: 'production',
        output: { filename: 'bundle.min.js' },
        plugins: [
            new UglifyjsWebpackPlugin({
                sourceMap: true,
                extractComments: /\/\*![\s\S]*\*\//,
                uglifyOptions: {
                    ie8: true
                }
            })
        ]
    });

    const publicConfig = merge(uglifyConfig, {
        entry: './src/public.ts',
        output: { filename: 'bundle.public.min.js' },
        plugins: []
    });

    return [commonConfig, uglifyConfig, publicConfig];
}
