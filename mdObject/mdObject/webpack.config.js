//
const merge = require('webpack-merge');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = () => {

    let commonConfig = {
        stats: { modules: false },

        entry: "./src/index.ts",

        output: {
            filename: "bundle.js",
            path: __dirname + "/dist"
        },

        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",

        resolve: {
            // Add '.ts' as resolvable extensions.
            extensions: [".ts"]
        },

        module: {
            rules: [
                // All files with a '.ts' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.ts$/, loader: "awesome-typescript-loader" },
            ]
        }
    };

    uglifyConfig = merge(commonConfig, {
        output: {
            filename: "bundle.min.js",
            path: __dirname + "/dist"
        },
        plugins: [
            new UglifyjsWebpackPlugin({
                sourceMap: true,
                extractComments: /\/\*\!.?\*\//
            })
        ]
    });


    return [commonConfig, uglifyConfig];
};