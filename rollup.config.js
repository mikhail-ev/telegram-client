export default [
    {
        input: './index.js',
        context: 'this',
        output: {
            strict: false,
            file: './dist/index.js',
            format: 'iife'
        },
    }, {
        input: './vendors.js',
        context: 'this',
        output: {
            strict: false,
            file: './dist/vendors.js',
            format: 'iife'
        }
    }, {
        input: './lib/jsbn_combined.js',
        context: 'this',
        output: {
            strict: false,
            file: './dist/jsbn_combined.js',
            format: 'iife'
        }
    }
]