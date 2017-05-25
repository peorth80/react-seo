//src/fortunes.js
var React = require('react');
var axios = require('axios');

var FortuneList = React.createClass({

    getInitialState: function() {
    return {
      Fortunes: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    this.serverRequest = 
      axios.get('https://api.github.com/users/peorth80')
        .then(function(response){
            _this.setState({
                Fortunes: response.data
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
        <p>{ JSON.stringify(this.state.Fortunes.bio) }</p>
        </div>
    )
  }
});

module.exports = FortuneList;
