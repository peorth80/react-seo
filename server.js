require('babel-core/register')({
  presets: ['react', 'es2015']

});

const initialData = require('./initialData/main')


// REQUIRES
var express = require("express");
var app = express();
var cors = require("cors");
var fetch = require('node-fetch');

// REACT (for SEO)
var React = require('react');
var ReactDOMServer = require('react-dom/server');
// Replace the default render wit hthe fact-react-render
var ReactRender = require('fast-react-render');

// This is our React component
// NOTE : we require the app.js file NOT the main.js
const App = require('./src/app');


function renderApp(res) {

  console.log('Fetching data...')

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      res.locals.seo = renderApp2(data);
      res.render('index');

    }).catch(function (err) {
      console.log(err);
    });
}

function renderApp2(data) {

  const props = {
    data: data
  };

  var Comp = React.createElement(App, props);

  // HTML REACT OUTPUT
  return ReactRender.elementToString(Comp);
}

// MIDDLEWARES
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(require('prerender-node'));

app.use(cors());

// Serve index file
app.get("/", function (req, res) {
  renderApp(res);
});


// Listen
var server = app.listen(3001, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening http://%s:%s', host, port);
});


