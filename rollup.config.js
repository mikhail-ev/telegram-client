const babel = require('rollup-plugin-babel');

const plugins = [babel({ plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]] })];

module.exports = [
    {
        input: 'src/modules/debug/debug.js',
        output: {
            name: 'debug',
            file: 'dist/debug.js',
            format: 'umd',
            sourcemap: true
        },
        plugins
    },
    {
        input: 'src/modules/login/login.js',
        output: {
            name: 'login',
            file: 'dist/login.js',
            format: 'umd',
            sourcemap: true
        },
        plugins
    },
    {
        input: 'src/modules/messenger/messenger.js',
        globals: {
            common: 'common'
        },
        output: {
            name: 'messenger',
            file: 'dist/messenger.js',
            format: 'umd',
            sourcemap: true
        },
		plugins
    },
    {
        input: 'src/bootstrap.js',
        output: {
            name: 'bootstrap',
            file: 'dist/bootstrap.js',
            format: 'umd',
            sourcemap: true
        },
		plugins
    },
]