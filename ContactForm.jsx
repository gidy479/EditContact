// ContactsForm.js
import React, { Component } from "react";
import { v4 } from "uuid";

class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phone: "", location: "",  };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state); 
    this.setState({ name: "", phone: "", location: "" }); // Clear form
  };


  componentDidUpdate(prevProps) {
    if (prevProps.editContact !== this.props.editContact && this.props.editContact) {
      this.setState({
        name: this.props.editContact.name,
        phone: this.props.editContact.phone,
        location: this.props.editContact.location,
      });
    }
  }
  


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="border px-2 py-1 rounded-md"
            placeholder="Enter name"
          />
        </div>
        <div>
         
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            className="border px-2 py-1 rounded-md"
            placeholder="Enter phone number"
          />
        </div>
        <div>
          
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            className="border px-2 py-1 rounded-md"
            placeholder="Enter location"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactsForm;
