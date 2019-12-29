var express = require("express");
app=express();
var User = require("../models/user");
var router  = express.Router();


router.get("/react", function(req, res){
	console.log('got this call')
	User.find({}).sort({score: -1}).limit(5).exec( 
	    function(err, allUsers) {
	    	if (err) {
	    		console.log (err)
	    	} else {
	        res.json(allUsers)
	    	}
	    }
	);
    ;
});

router.post("/react", function(req, res){
    var myUser = new User({name: req.body.name, score: req.body.score})
    myUser.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;