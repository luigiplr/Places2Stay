module.exports = {
    presets:
        process.env.RN_PLATFORM === 'web'
            ? ['next/babel']
            : ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.ts',
                    '.tsx',
                    '.json',
                ],
                alias: {
                    '#': './src/',
                },
            },
        ],
        [
            'babel-plugin-inline-import',
            {
                extensions: ['.svg'],
            },
        ],
        '@babel/plugin-proposal-export-namespace-from',

        ...(process.env.RN_PLATFORM === 'web'
            ? [['react-native-web', { commonjs: true }]]
            : []),
    ],
};
