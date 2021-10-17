module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                //
                useBuiltIns: 'usage', // 按需填充
                corejs: 3 // 需要设置为3, 否则默认用的2, 会报错
            }
        ]

    ]
}