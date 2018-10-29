
const path = require('path');

module.exports = {
	entry:{
		app: './app/app.js'
	},

	output: {
		path: path.resolve(__dirname, '../public'),
		filename: '[name].[hash].js'
	}
};