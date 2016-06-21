var express = require('express');
var router = express.Router();
var User = require('../models/User');
/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find().exec(function(err, result) {
        res.json(result);
    })
});

router.post('/', function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err, result) {
        if (err)
            return next(err);
        res.json(result);
    })
});

router.put('/:id', function(req, res, next) {
	User.findOne({_id:req.params.id}).exec(function (err,result) {
		if(err)
			return next(err);
		result.name = req.body.name;
		result.age = req.body.age;
		result.save(function (err,saveResult) {
			 if(err)
				return next(err);
			return res.json(saveResult);	  
		})
	})
});

router.delete('/:id', function(req, res, next) {
    User.remove({ _id:req.params.id }, function(err, result) {
        if (err)
        	return next(err);
        res.json(result);
    });
});

module.exports = router;
