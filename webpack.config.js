module.exports = {
    context: __dirname + "/js_wp/",
    entry: {
        main: "./main"
    },
    output: {
        path: "compiled_wp",
        filename: "[name].js",
        chunkFilename: "[name].[id].js", // TODO chunk name?
        //publicPath: "/compiled_wp/"
        publicPath: "http://localhost:8080/compiled_wp/"
    },
    resolve: {
        root: "./js_wp"
    },
    devtool: "source-map"
};