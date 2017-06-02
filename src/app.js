var React = require('react');
var ReactDOM = require('react-dom');
var UserInfo = require('./users.js');

class App extends React.Component {


  constructor(props) {
    super(props);

  }
 
  render () {
    //console.log('App render');
    return (
      <div className="row">
        <UserInfo users={this.props.data} username="Bret" />
      </div>
    );
  }
}

module.exports = App;