import React, { Component } from 'react';

class EditUsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      email: props.user.email
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', this.state);
    this.props.onEditUser({ ...this.state, id: this.props.user.id });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Edit User</h2>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <button type="submit">Update User</button>
      </form>
    );
  }
}

export default EditUsersForm; 