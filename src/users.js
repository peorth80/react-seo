//src/github.js
import React from 'react'
import ReactDOM from 'react-dom';


var GitHubUser = React.createClass({
  componentDidMount: function () {
    let currentUser = ReactDOM.findDOMNode(this.refs.selectedUser);

    if (currentUser != null) {
      currentUser.className = "selectedUser";
    }
  },

  componentWillUnmount: function () {
  },

  render: function () {
    const choosenUser = this.props.username;
    let users = this.props.users;

    const allUsers = users.map((item) => {
      let userRow = null;
      let selectedUser = null;
      if (choosenUser == item.username) {
        userRow = <li><strong>{item.username}</strong></li>
        selectedUser = "selectedUser";
      }
      else 
      {
        userRow = <li>{item.username}</li>
        selectedUser = "";
      }

      return (
        <div key={item.username} ref={selectedUser}>
          <ul>
            <li>{item.id}</li>
            <li>{item.name}</li>
            {userRow}
            <li>{item.email}</li>
          </ul>

        </div>
      )
    });

    return (
      <div>
        <h1>Users</h1>
        <h2>{this.props.username}</h2>
        <div>{allUsers} </div>
      </div>
    )
  }
});

module.exports = GitHubUser;
