module.exports = [
    {
        input: 'src/modules/login/login.js',
        output: {
            name: 'login',
            file: 'dist/login.js',
            format: 'umd',
            sourcemap: true
        }
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
        }
    },
    {
        input: 'src/bootstrap.js',
        output: {
            name: 'bootstrap',
            file: 'dist/bootstrap.js',
            format: 'umd',
            sourcemap: true
        }
    },
]