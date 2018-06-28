const merge = require('webpack-merge');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = () => {

    const commonConfig = {
        stats: { modules: false },
        entry: "./src/index.ts",
        output: {
            filename: "bundle.js",
            path: __dirname + "/lib",
            library: 'MdObject',
            libraryTarget: 'umd'
        },
        devtool: "source-map", // Enable sourcemaps for debugging webpack's output.
        resolve: {
            extensions: [".ts"] // Add '.ts' as resolvable extensions.
        },
        module: {
            rules: [ // All files with a '.ts' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.ts$/, use: "awesome-typescript-loader" }
            ]
        },
        plugins: [
            new CheckerPlugin()
        ]
    }

    const uglifyConfig = merge.smart(commonConfig, {
        output: {
            filename: "bundle.min.js",
        },
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

    const publicConfig = merge.smart(uglifyConfig, {
        entry: "./src/public.ts",
        output: {
            filename: "bundle.public.min.js",
        },
        plugins: []
    })

    return [commonConfig, uglifyConfig, publicConfig];
}