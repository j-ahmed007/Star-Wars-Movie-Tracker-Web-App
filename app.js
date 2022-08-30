// General Requirements
var express = require("express");
var app = express();
var routes = require("./routes");

// EJS Requirements
app.set("view engine", "ejs");

// Access To 'Public' Static Assets
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Express Routes
app.get("/", routes.home); // Home Page
app.get("/episode/:episode_number?", routes.episodes); // 'Episode' Pages
app.get("*", routes.pageNotFound); // '404 Error' Page

// Server Live On Port: 3000
app.listen(process.env.PORT || 3000);