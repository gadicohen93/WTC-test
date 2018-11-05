var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();

mongoose.connect("mongodb://localhost:27017/test");

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));

app.use('/user', require('./api/getUser'));


app.listen(app.get("port"), function () {
  console.log("Server started on port " + app.get("port"));
});

