import React, { Component } from "react";
import MessagesContainer from "./messages_container/MessagesContainer.index";
import SectionHeader from "./section_header/SectionHeader.index";
import StreamingButton from "./streaming_button/StreamingButton.index";
// import Logo from "../logo/Logo.index";
class App extends Component {
  state = {
    isStreaming: false
  };

  // Handles the stream.
  handleStreaming = e => {
    this.setState(prevState => ({
      isStreaming: !prevState.isStreaming
    }));
  };

  render() {
    return (
      <div className="streaming-box">
        <SectionHeader />
        <MessagesContainer isStreaming={this.state.isStreaming} />
        <div className="streaming-box__button-container l-container l-container--flex ">
          <StreamingButton
            isStreaming={this.state.isStreaming}
            handleStreaming={this.handleStreaming}
          />
        </div>
      </div>
    );
  }
}

export default App;
