import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./Message.scss"
import { Time, IconReaded, Avatar } from "../"

const Message = ({
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => (
  <div
    className={classNames("message", {
      "message--isme": isMe,
      "message--is-typing": isTyping,
      "message--image": attachments && attachments.length === 1,
    })}
  >
    <div className="message__content">
      {console.log(text)}
      <IconReaded isMe={isMe} isReaded={isReaded} />
      <div className="message__avatar">
        {console.log(user)}
        <Avatar user={user} />
      </div>
      <div className="message__info">
        {(text || isTyping) && (
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        )}
        <div className="message__attachments">
          {attachments &&
            attachments.map((item, index) => (
              <div key={index} className="message__attachments-item">
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
        </div>
        {date && (
          <span className="message__date">
            <Time date={date} />
          </span>
        )}
      </div>
    </div>
  </div>
)

Message.defaultProps = {
  user: {},
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
}

export default Message
