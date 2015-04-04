//Include express
var express = require('express');

//Initialize the router
var router = express.Router();

//Setup the route

router.post('/', function (req, res){
	// show the request body in the command line
    console.log(req.body);

    // return a json response to angular
    res.json({
        'msg': 'success!'
    });
});

// Expose the module
module.exports = router;