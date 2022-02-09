//Its output/module.exports is the configuration object of webpack.

const path = require('path');

module.exports = {
    entry: './client/client.js',
    mode: 'production', //minifies code, but less clear error messages than developement. None leaves code as is.
    warch: true,
    watchOptions: {
        aggregateTimeout:200, //if any new build events come in in the next 200 ms, just do one build event. Good if you spam ctrl+s
    },
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filename: 'bundle.js'
    },
}