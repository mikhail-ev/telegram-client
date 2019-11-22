const babel = require('rollup-plugin-babel');
const minify = require('rollup-plugin-babel-minify');

const babelPlugins = [['@babel/plugin-proposal-class-properties', { loose: true }]];

const plugins = [babel({ plugins: babelPlugins })];

const prod = true;

if (prod) {
	plugins.push(minify({
		plugins: babelPlugins
	}));
}

module.exports = [
	{
		input: 'src/modules/debug/debug.js',
		output: {
			name: 'debug',
			file: 'dist/debug.js',
			format: 'umd',
			sourcemap: !prod
		},
		plugins
	},
	{
		input: 'src/modules/login/login.js',
		output: {
			name: 'login',
			file: 'dist/login.js',
			format: 'umd',
			sourcemap: !prod
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
			sourcemap: !prod
		},
		plugins
	},
	{
		input: 'src/bootstrap.js',
		output: {
			name: 'bootstrap',
			file: 'dist/bootstrap.js',
			format: 'umd',
			sourcemap: !prod
		},
		plugins
	},
];