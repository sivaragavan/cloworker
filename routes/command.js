/*
 * GET users listing.
 */
var router = require('../router');

exports.main = function(req, res) {
    router.execute('http', {
        'testing': 'test'
    }, function(response) {
        res.send(response);
    });

};