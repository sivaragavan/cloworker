var http = require('http');

// Validate inputs. Check for req params.
exports.run = function(inputs, callback) {

	// var options = {
	// 	host: 'www.google.com',
	// 	port: 80,
	// 	path: '/upload',
	// 	method: 'POST'
	// };

	console.log(inputs);

	var req = http.request(inputs);

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