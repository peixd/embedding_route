var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/bundle.js"
    },
    devServer: {
        inline: true,
        port: 3000,
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["latest", "stage-0", "react"]
                },
            }, {
                test: /\.json$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: "json-loader",
            }, {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
            }, {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },

    context: __dirname
}