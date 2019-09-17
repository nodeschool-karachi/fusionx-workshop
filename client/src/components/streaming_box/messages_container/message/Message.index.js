import React from 'react';

const Message = ({ image, name, message }) => {
  return (
    <li className="message__card c-card">
      <div className="message__avatar">
        <img src={image} alt="avatar" />
      </div>
      <div className="message__content-wrapper">
        <div className="message__name">{name}</div>
        <div className="message__content">{message}</div>
      </div>
    </li>
  );
};

export default Message;
