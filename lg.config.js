const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/dist/', // 用来解决浏览器报错: Automatic publicPath is not supported in this browser
        filename: 'main.js',
        // path: "./dist/main.js" // The provided value "./dist/main.js" is not an absolute path!
        path: path.resolve(__dirname, 'dist'),

    },
    module: {
        rules: [
            {
                test: /\.css$/, // 用于匹配文件类型的正则表达式
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1

                        }
                    },
                    'postcss-loader'
                ], // loader的执行顺序是从右到左, 从下到上, 先执行的loader会将处理结果传递给下一个loader
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'],
                /*
                * importLoaders 只对未解析的@imports 有效
                * 因此, 当将 postCSS 与 nextCSS(无 @import 解析器)一起使用时, 就需要设置 importLoaders
                * 但是在使用 sass/less 时, 它已经处理了 @import 语句, 因此不需要 importLoaders
                * */

            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                // use: [
                //     {
                //         loader: 'file-loader',
                //         options: {
                //             esModule: false, // 不转换为esModule
                //         }
                //     }
                // ]
                use: ['file-loader'],
            }
        ]
    }
}