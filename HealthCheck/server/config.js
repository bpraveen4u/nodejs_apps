var path = require('path');

module.exports = {
	mongo: {

	},
	server: {
		listenPort: 3000,
		securePort: 8443,
		distFolder: path.resolve(__dirname, '../client/dist'),
		logDirectory: path.resolve(__dirname, '/logs')
	}
};