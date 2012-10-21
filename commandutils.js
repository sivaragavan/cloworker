
exports.validate = function(inputs, inputDef, callback) {

	console.log("Validating : " + inputs);

	for(var input in inputDef) {
		console.log('Validating : ' + input);
		if(!inputs.hasOwnProperty(input)) {
			callback(false);
			return;
		}
	}

	callback(true);
}