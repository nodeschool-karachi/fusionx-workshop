import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <li className="message__card c-card">
        <div className="message__avatar">
          {" "}
          <img src={this.props.image} alt="avatar" />
        </div>
        <div className="message__content-wrapper">
          <div className="message__name">{this.props.name}</div>
          <div className="message__content">{this.props.message}</div>
        </div>
      </li>
    );
  }
}

export default Message;
