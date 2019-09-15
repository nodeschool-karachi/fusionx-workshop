import React from "react";
import PropTypes from "prop-types";

const StreamButton = ({ handleStreaming, isStreaming }) => {
  return (
    <button
      onClick={handleStreaming}
      className="streaming-box__streaming-btn c-btn"
    >
      {isStreaming ? "Pause" : "Start"}
    </button>
  );
};

StreamButton.propTypes = {
  handleStreaming: PropTypes.func,
  isStreaming: PropTypes.bool
};

export default StreamButton;
