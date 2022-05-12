const path = require("path");
var fs = require('fs');
const webpack = require("webpack")

module.exports = (env, argv) => {
    return {
        context: __dirname,
        output: {
            filename: "[name].js",
            chunkFilename: "[name].bundle.js",
            path: __dirname + "/output",
            publicPath: "scripts/output/",
            devtoolModuleFilenameTemplate: function (info) {
                if (fs.existsSync(info.absoluteResourcePath)) {
                    return 'file:///' + path.resolve(info.absoluteResourcePath).replace(/\\/g, '\/') + '?' + info.hash;
                }
                return `webpack:///${info.resourcePath}?${info.loaders}`;
            }
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                }
            }
        },
        devtool: "source-map",
        resolve: {
            modules: [__dirname, 'node_modules', '.'],
            extensions: [".ts", ".tsx", ".js", ".json"],
            plugins: [
            ],
            fallback: { "stream": false }
        },
        target: ['web', 'es2020'],
        plugins: [
            new webpack.ProgressPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/, use: [{
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }]
                }
            ]
        },
        externals: {
            jquery: "jQuery"
        },
        devServer: {
            publicPath: 'http://localhost:8080/scripts/output/'
        },
        entry: {
            app: ["./setup-webpack"]
        }
    }
};