import React, { useState } from 'react';
import MessagesContainer from './messages_container/MessagesContainer.index';
import SectionHeader from './section_header/SectionHeader.index';
import StreamingButton from './streaming_button/StreamingButton.index';

const StreamingBox = () => {
  /**
   * isStreaming contains the value
   * setIsStraming is used to update the isStreaming variable.
   */
  const [isStreaming, setIsStreaming] = useState(false);

  // Handles the stream.
  const handleStreaming = () => {
    setIsStreaming(value => !value);
  };

  return (
    <div className="streaming-box">
      <SectionHeader />
      <MessagesContainer isStreaming={isStreaming} />
      <div className="streaming-box__button-container l-container l-container--flex ">
        <StreamingButton
          isStreaming={isStreaming}
          handleStreaming={handleStreaming}
        />
      </div>
    </div>
  );
};

export default StreamingBox;
