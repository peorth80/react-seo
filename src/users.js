//src/github.js
var React = require('react');

var GitHubUser = React.createClass({
  
  componentDidMount: function() {

  },

  componentWillUnmount: function() {

  },

  render: function() {
    var choosenUser = this.props.username;
    var allUsers = JSON.stringify(this.props.Users);
    
    
    return (
        <div>
        <h1>Users</h1>
        <h2>{ this.props.username }</h2>
        <p>{ allUsers } </p>
        </div>
    )
  }
});

module.exports = GitHubUser;
