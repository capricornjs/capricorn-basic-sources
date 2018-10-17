const path = require('path')

module.exports = {
	entry: './js/main@0.0.1.js',
	// entry: './core/events@0.0.1.js',
	
	output: {
		filename: '[name].js',
		publicPath: '/',
		path: path.resolve(__dirname, '../assets')
	},
	
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		modules: [
			path.resolve(__dirname, '../node_modules'),
			path.resolve(__dirname, '../core')
		],
		alias: {}
	},
	
	module: {
		rules: []
	}
}