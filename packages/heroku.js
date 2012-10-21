var executor = require('../executor');

exports.inputDef = {
	apikey: {
		desc: 'Heroku API Key',
		required: true
	}
};

exports.run = function(inputs, callback) {

	console.log(inputs);

	executor.execute('web', {
		protocol: 'https:',
		host: 'api.heroku.com',
		path: '/apps',
		auth: ':3427d6e806ec14abd12dcf229ff3b8d91baa84e7',
		headers: {
			'Accept': 'application/json'
		}
	}, function(response) {
		callback(response);
	});

}