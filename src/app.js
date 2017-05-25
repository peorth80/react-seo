var React = require('react');
var ReactDOM = require('react-dom');
var FortuneList = require('./fortunes.js');


module.exports = React.createClass({
  render: function() {  
    return (
      <div className="row">
        <FortuneList />
      </div>
    );
  }
});

