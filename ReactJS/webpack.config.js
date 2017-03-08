// You do not need to require webpack so move on to the path

// Default nodeJS library
const path		= require('path');

// Set up the distrubution directory, which will serve your app
// This will be the directory where you copy all your transpiled and bundled filed
const DIST_DIR	= path.resolve(__dirname, 'dist');

// Where to find the untranspiled source code
const SRC_DIR	= path.resolve(__dirname, 'src');

// Webpack configuration
const config 	= {
	// Set your root file, which will stat your app
	entry: SRC_DIR + '/app/index.js',
	output: {
		path: DIST_DIR + '/app',
		filename: 'bundle.js',
		// if deployed what would be the public server
		publicPath: '/app/'
	},
	// Necessary if you need to compile
	module: {
		loaders: [
			{
				// which files do you want the loader to look at?
				// use a reg expression to identify your files
				test: /\.js?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-2']

				}
			}

		]

	}
};

module.exports = config;