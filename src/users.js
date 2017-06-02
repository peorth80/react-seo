//src/github.js
import React from 'react'


var GitHubUser = React.createClass({

  componentDidMount: function () {

  },

  componentWillUnmount: function () {

  },

  render: function () {
    const choosenUser = this.props.username.length;
    let users = this.props.users;

    if (users === undefined)
      users = initialData;

    const allUsers = users.map((item) => {
      return (
        <div key={item.id}>
          <ul>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.username}</li>
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
