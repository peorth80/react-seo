require('babel-core/register')({
    presets: ['react']
});


// REQUIRES
var express = require("express");
var app = express();
var cors = require("cors");

// REACT (for SEO)
var React = require('react');
var ReactDOMServer = require('react-dom/server');
// Replace the default render wit hthe fact-react-render
var ReactRender = require('fast-react-render');

// This is our React component
// NOTE : we require the app.js file NOT the main.js
var Comp = React.createFactory(require('./src/app'));

// HTML REACT OUTPUT
var seo = ReactDOMServer.renderToString(Comp());

// MIDDLEWARES
app.use(express.static(__dirname+'/public'));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(require('prerender-node'));

app.use(cors());

// Serve index file
app.get("/", function(req, res) {
  res.locals.seo = seo;
  res.render('index'); 
});


// Listen
var server = app.listen(3001, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening http://%s:%s', host, port);
});


