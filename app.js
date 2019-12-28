var express = require('express'),
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
app.use(express.static(__dirname + "/public"));
// seedDB(); 

var port = process.env.PORT || 3000;

app.use("/", indexRoutes);

app.listen(port, process.env.IP, function(){
   // console.log("Hello world");
});