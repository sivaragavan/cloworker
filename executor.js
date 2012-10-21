var commandutils = require('./commandutils');

exports.execute = function(command, inputs, callback) {

	command_executor = require("./packages/" + command);

	commandutils.validate(inputs, command_executor.inputDef, function(valid) {
		if(valid) {
			command_executor.run(inputs, function(response) {
				callback({
					'response': response,
					'result': true
				});
			});
		} else {
			callback({
				'response': 'validation failed',
				'result': false
			});
		}
	});
};