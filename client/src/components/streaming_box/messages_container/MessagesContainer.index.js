import React, { Component } from 'react';
import Message from './message/Message.index';
import { getMessage } from '../../../utils/getMessages';

class Chat extends Component {
  // Initial State.
  state = {
    messages: [],
    isStreaming: this.props.isStreaming,
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      if (this.state.isStreaming) {
        this.generateMessage();
      }
    }, 1000);
    document.addEventListener('keydown', this.handleKey);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isStreaming !== state.isStreaming) {
      return {
        isStreaming: props.isStreaming,
      };
    }
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { current } = this.ulRef;
    return {
      shouldAutoScroll:
        current.scrollTop + current.clientHeight >= current.scrollHeight,
    };
  }

  componentDidUpdate(prevProps, prevState, { shouldAutoScroll }) {
    if (shouldAutoScroll) {
      const { current } = this.ulRef;
      current.scrollTop = current.scrollHeight;
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    document.removeEventListener('keydown', this.handleKey);
  }

  // fetch the new messages.
  generateMessage = async () => {
    const message = await getMessage();
    this.setState(prevState => ({
      messages: [...prevState.messages, message],
    }));
  };

  // Handles the keystroke.
  handleKey = e => {
    if (e.key === 'c') {
      this.setState({ messages: [] });
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
          {this.state.messages.length == 0 && <div>No data</div>}
        </ul>
      </div>
    );
  }
}

export default Chat;
