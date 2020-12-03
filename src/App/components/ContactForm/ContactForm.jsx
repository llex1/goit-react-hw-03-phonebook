import React, { Component } from "react";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    contactName: {
      value: "",
    },
    contactNumber: {
      value: "",
    },
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: {
        value: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    this.setState({
      contactName: {
        value: "",
      },
      contactNumber: {
        value: "",
      },
    });
    this.props.addContact(event);
  };

  render() {
    return (
      <form className={styles.addContact} onSubmit={this.handleSubmit}>
        <label htmlFor="contactName">Name</label>
        <input
          type="text"
          name="contactName"
          id="contactName"
          onChange={this.handleChange}
          value={this.state.contactName.value}
        />
        <label htmlFor="contactNumber">Number</label>
        <input
          type="text"
          name="contactNumber"
          id="contactNumber"
          onChange={this.handleChange}
          value={this.state.contactNumber.value}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
