const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        // path: "./dist/main.js" // The provided value "./dist/main.js" is not an absolute path!
        path: path.resolve(__dirname, 'dist'),
    }
}