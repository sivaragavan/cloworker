exports.execute = function(command, inputs, callback) {

	executor = require("./packages/" + command);

	executor.run(inputs, function(response) {
		callback({
			'response': response,
			'result': true
		});
	});
};