var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
   name: String,
   score: Number
});

module.exports = mongoose.model("User", userSchema);