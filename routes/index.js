var express = require("express");
var path = require('path');
app=express();
var User = require("../models/user");
var router  = express.Router();

// Serve static files from the React app
router.use(express.static(path.join(__dirname, 'client/build')));

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

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = router;