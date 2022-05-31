module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
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
                    '.png',
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
    ],
};
