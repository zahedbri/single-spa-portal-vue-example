const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = dir => path.join(__dirname, dir)
module.exports = {
	entry: {
		singleSpaEntry: 'src/singleSpaEntry.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'release'),
        libraryTarget: 'umd',
        library: 'workflow'
	},
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    publicPath: '/workflow/',
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            }
        ]
    },
	resolve: {
        alias: {
            '@': resolve('src'),
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: [
            ".js", ".vue"
        ],
		modules: [
			__dirname,
			'node_modules',
		]
	},
    mode: 'development',
	devtool: 'none',
	externals: [
	],
	plugins: [
        new VueLoaderPlugin()
	],
};
