const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
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
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    // require('autoprefixer')
                                    'postcss-preset-env'
                                ]
                            }

                        }
                    }
                ], // loader的执行顺序是从右到左, 从下到上, 先执行的loader会将处理结果传递给下一个loader
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    { // 假设处理less文件也需要用postcss做兼容性处理, 那么此时配置就显得有些冗余了(自信点, 非常冗余)
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    // require('autoprefixer')
                                    'postcss-preset-env'
                                ]
                            }

                        }
                    },
                    'less-loader'],
            }
        ]
    }
}