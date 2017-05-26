//src/github.js
var React = require('react');
var axios = require('axios');

var GitHubUser = React.createClass({

    getInitialState: function() {
    return {
      GitHub: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    var username = this.props.username
    this.serverRequest = 
      axios.get('https://api.github.com/users/' + username)
        .then(function(response){
            _this.setState({
                GitHub: response.data
            })
        });  
    },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
        <div>
        <h1>Bio</h1>
        <p>{ JSON.stringify(this.state.GitHub.company) }</p>
        </div>
    )
  }
});

module.exports = GitHubUser;
