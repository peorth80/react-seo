var React = require('react');
var ReactDOM = require('react-dom');
var GitHubUser = require('./github.js');


module.exports = React.createClass({
  render: function() {  
    return (
      <div className="row">
        <GitHubUser username="bluedge" />
      </div>
    );
  }
});

