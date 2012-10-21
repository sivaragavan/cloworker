exports.inputDef = {
	host: {
		desc: 'Host Name',
		required: true
	},
	path: {
		desc: 'Url Path',
		required: true
	}
};

exports.run = function(inputs, callback) {

	console.log(inputs);

	var web;
	if(inputs.hasOwnProperty('protocol') && inputs.protocol == 'https:') {
		web = require('https');
	} else {
		web = require('http');
	}

	var req = web.request(inputs);

	req.on('response', function(res) {
		console.log('STATUS: ' + res.statusCode);
		console.log('HEADERS: ' + JSON.stringify(res.headers));
		res.setEncoding('utf8');
		res.on('data', function(chunk) {
			callback(chunk);
		});
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	// write data to request body
	req.write("");

	req.end();
}