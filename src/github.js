//src/github.js
var React = require('react');
//var fetch = require('isomorphic-fetch');

var GitHubUser = React.createClass({

    getInitialState: function() {
      console.log("getInitialState");
    return {
      GitHub: {
        company: 'Loading...'
      }
    }
  },

  componentWillMount: function() {
    console.log("componentwillmount");
  },

  componentDidMount: function() {
    var _this = this;    
    var username = this.props.username

    this.serverRequest = 
      fetch('https://api.github.com/users/' + username).then(function(response) {
            return (response.json());
      }).then(function(j) {
          console.log("then");
          console.log(j);
            _this.setState({
                GitHub: j
            })
      }).catch(function(err) {
        // Error :(
      });
    },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
        <div>
        <h1>Bio</h1>
        <img src={this.state.GitHub.avatar_url} />
        <p>{ this.state.GitHub.company }</p>
        </div>
    )
  }
});

module.exports = GitHubUser;
