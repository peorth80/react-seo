var React = require('react');
var ReactDOM = require('react-dom');
var UserInfo = require('./users.js');

module.exports = React.createClass({
    propTypes : {

    },

    getInitialState: function() {
    return {
      Users: {
        name: 'Loading...'
      }
    }
  },

  componentDidMount: function() {
    var _this = this;

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        return response.json();
      })
      .then(function(j) {          
        _this.setState({
            Users: j
        }, function () {
              //console.log(_this.state.Users);
        });
      }).catch(function(err) {
        console.log(err);
      });

  },

  componentDidUpdate: function() {
    
  },

  render: function() {  
    return (
      <div className="row">
        <UserInfo Users={this.state.Users} username="Bret" />
      </div>
    );
  },
});

