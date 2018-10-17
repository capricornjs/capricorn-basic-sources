const config = require('./webpack.base')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const fs = require('fs-extra')
const { log, renderAscii } = require('./core/util')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Spinner = require('./core/spinner')

config.mode = 'production'

Object.assign(config.output, {
	filename: '[name].js',
	chunkFilename: '[id].js',
	publicPath: '/',
	path: path.resolve(__dirname, '../assets')
})

config.module.rules = config.module.rules.concat([
	{
		test: /\.(js|jsx)$/,
		use: ['babel-loader'],
		exclude: /node_modules/
	}
])

config.plugins = (config.plugins || []).concat([
	new webpack.DefinePlugin({
		DEBUG: false,
		'process.env': {
			NODE_ENV: '"production"'
		}
	}),
	new UglifyJSPlugin()
	//想看包文件的情况，可以打开
	//new BundleAnalyzerPlugin(),
	// new ExtractTextPlugin('[name].[chunkhash].css'),
])

fs.remove(path.resolve(__dirname, '../assets'))
log.info('assets文件夹已被删除')

const spinner = new Spinner('正在打包...')
spinner.start()
webpack(config, (err, stats) => {
	spinner.stop()
	if (err) {
		log.error(err)
		return
	}
	log.info(stats.toString({}))
	renderAscii()
	log.success('打包成功')
})
