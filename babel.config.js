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
        // ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        //   ['react-native-web', { commonjs: true }],
    ],
};
