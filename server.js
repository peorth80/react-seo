require('babel-core/register')({
    presets: ['react']
});


// REQUIRES
var express = require("express");
var app = express();


// REACT (for SEO)
var React = require('react');
var ReactDOMServer = require('react-dom/server');
// Replace the default render wit hthe fact-react-render
var ReactRender = require('fast-react-render');

// This is our React component
// NOTE : we require the app.js file NOT the main.js
var element = React.createElement(require('./src/app'));

// HTML REACT OUTPUT BY fast-react-render
var seo = ReactRender.elementToString(element, {context: {}});

// MIDDLEWARES
app.use(express.static(__dirname+'/public'));
app.set("view engine", "ejs");
app.set("views", "./views");


// Serve index file
app.get("/", function(req, res) {
  res.locals.seo = seo;
  res.render('index');
});


// Listen
var server = app.listen(3000, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening http://%s:%s', host, port);
});
