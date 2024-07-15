const path = require('path');

module.exports = {
    mode: 'development', // I need DEV mode. 
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: __dirname, // Serve from the root directory, using public doesn't work. 
        },
        compress: true,
        port: 8080
    }
};