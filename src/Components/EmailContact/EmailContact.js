import React, { Component } from "react";
import "./emailcontact.css";

import { db } from "../../Firebase/Firebase.js";

class EmailContact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: "",
    };
  }

  onEmailChange = (event) => this.setState({ email: event.target.value });

  onMessageChange = (event) => this.setState({ message: event.target.value });

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.email !== "" && this.state.message !== "") {
      db.collection("people")
        .add({
          email: this.state.email,
          message: this.state.message,
        })
        .then(() => alert("message sent"))
        .catch((e) => alert("somethings wrong"));
    } else {
      return alert("Input field can't be empty");
    }
  };

  render() {
    return (
      <form className="contact" onSubmit={this.onFormSubmit}>
        <div className="contact-title">Send a message here</div>
        <div className="email">
          <input
            type="email"
            placeholder="Email"
            onChange={this.onEmailChange}
            id="email"
          />
        </div>
        <div className="message">
          <input
            placeholder="Message here"
            type="text"
            onChange={this.onMessageChange}
            id="message"
            required
          />
        </div>
        <div className="btn-submit">
          <input type="submit" className="input-submit" value="send" />
        </div>
      </form>
    );
  }
}

export default EmailContact;
