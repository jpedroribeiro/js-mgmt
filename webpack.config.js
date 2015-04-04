module.exports = {
    context: __dirname + "/js_wp/",
    entry: {
        main: "./main"
    },
    output: {
        path: "compiled_wp",
        filename: "[name].js",
        chunkFilename: "[name].chunk.[id].js", // TODO chunk name?
        publicPath: "/compiled_wp/"
    },
    resolve: {
        root: "./js_wp"
    },
    devtool: "source-map"
};