import React, { Component } from "react";
import { Alert, Table } from "reactstrap";
import FormComponent from "./FormComponent";

class UserListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      user: {},
    };
    this.hide = this.hide.bind(this);
  }
  hide() {
    this.setState({ visible: false });
  }
  getElementById(value) {
    this.setState({
      user: value,
      visible: true,
      title: value.name,
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <button
          className="btn btn-primary mb-2"
          onClick={() =>
            this.setState({ user: {}, visible: true, title: "New User" })
          }
        >
          Add
        </button>
        {this.state.visible ? (
          <FormComponent
            visible={this.state.visible}
            hide={this.hide}
            addUser={this.props.addUser}
            editUser={this.props.editUser}
            user={this.state.user}
            title={this.state.title}
          />
        ) : null}

        <Table className="shadow">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.username}</td>
                <td>
                  <button
                    onClick={() => this.getElementById(user)}
                    className="btn btn-warning bg-warning shadow"
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    onClick={() => this.props.deleteUser(user)}
                    className="btn btn-danger bg-danger shadow"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserListComponent;
