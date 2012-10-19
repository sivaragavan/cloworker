/*
 * GET users listing.
 */
var router = require('../router');

exports.main = function(req, res) {
	router.execute(req.params.command, req.query, function(response) {
		res.send(response);
	});
};