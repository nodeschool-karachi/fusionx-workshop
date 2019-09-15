import React, { Component } from "react";
import Message from "./message/Message.index";
import { getMessage } from "../../../utils/getMessages";

class Chat extends Component {
  // Initial State.
  state = {
    messages: [getMessage()],
    isStreaming: this.props.isStreaming
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      if (this.state.isStreaming) {
        this.generateMessage();
      }
    }, 1000);
    document.addEventListener("keydown", this.handleKey);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isStreaming !== state.isStreaming) {
      return {
        isStreaming: props.isStreaming
      };
    }
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { current } = this.ulRef;
    console.log(current.scrollTop, current.clientHeight, current.scrollHeight);
    return {
      shouldAutoScroll:
        current.scrollTop + current.clientHeight >= current.scrollHeight
    };
  }

  componentDidUpdate(prevProps, prevState, { shouldAutoScroll }) {
    // console.log(current.scrollTop);
    if (shouldAutoScroll) {
      const { current } = this.ulRef;
      console.log(current.scrollTop);
      current.scrollTop = current.scrollHeight;
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    document.removeEventListener("keydown", this.handleKey);
  }

  // fetch the new messages.
  generateMessage = () => {
    const message = getMessage();
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));
  };

  // Handles the keystroke.
  handleKey = e => {
    if (e.key === "c") {
      this.setState({ messages: [getMessage()] });
    }
  };

  //  Ref of ul
  ulRef = React.createRef();

  // Main Render
  render() {
    return (
      <div className="streaming-box__messages-container l-container l-container--full-width">
        <ul ref={this.ulRef} className="streaming-box__messages-list">
          {this.state.messages.map((message, index) => {
            return <Message {...message} key={index} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Chat;
