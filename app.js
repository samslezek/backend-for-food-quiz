var express = require('express'),
    path = require('path'),
	app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var	mongoose = require('mongoose'),
	indexRoutes = require("./routes/index"),
	User  = require("./models/user"),
	seedDB = require('./seeds'),
	tone = require('tone');

mongoose.connect('mongodb://testuser:password1@ds359118.mlab.com:59118/foodhighscores', { useNewUrlParser: true });
app.set("view engine", "ejs");
// app.use(express.static(__dirname + "/public"));
// seedDB(); 

var port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/react", function(req, res){
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

app.post("/react", function(req, res){
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
app.get('/reactapp', function(req, res){
  res.sendFile(path.join(__dirname+'/client/build/index.html'), function (err) {
  	if (err) {
  		res.status(500).send(err)
  	}
})});




app.listen(port, process.env.IP, function(){
   // console.log("Hello world");
});