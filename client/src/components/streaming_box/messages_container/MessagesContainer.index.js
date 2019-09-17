import React, { useState, useEffect } from 'react';
import Message from './message/Message.index';
import { getMessage } from '../../../utils/getMessages';

const Chat = ({ isStreaming }) => {
  // Initial State.
  const [messages, setMessages] = useState([]);

  //  Ref of ul
  const ulRef = React.createRef();

  useEffect(() => {
    // Set Interval
    const timerID = setInterval(async () => {
      if (isStreaming) {
        generateMessage();
      }
    }, 1000);

    // Add listener
    document.addEventListener('keydown', handleKey);

    /**
     * Cleanup function
     */
    return () => {
      clearInterval(timerID);
      document.removeEventListener('keydown', handleKey);
    };
  });

  useEffect(() => {
    if (ulRef) {
      const { current } = ulRef;
      const shouldAutoScroll =
        current.scrollTop + current.clientHeight <= current.scrollHeight;
      if (shouldAutoScroll) {
        current.scrollTop = current.scrollHeight;
      }
    }
  }, [ulRef]);

  // fetch the new messages.
  const generateMessage = async () => {
    try {
      const message = await getMessage();
      setMessages(prevMessages => [...prevMessages, message]);
    } catch (error) {
      console.log(error);
    }
  };

  // Handles the keystroke.
  const handleKey = e => {
    if (e.key === 'c') {
      setMessages([]);
    }
  };

  return (
    <div className="streaming-box__messages-container l-container l-container--full-width">
      <ul ref={ulRef} className="streaming-box__messages-list">
        {messages.map((message, index) => {
          return <Message {...message} key={index} />;
        })}
        {messages.length === 0 && (
          <div className="streaming-box__messages-list--empty">No data</div>
        )}
      </ul>
    </div>
  );
};

export default Chat;
