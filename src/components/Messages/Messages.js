import React from "react"
import PropTypes from "prop-types"
import { Empty, Spin } from "antd"
import classNames from "classnames"

import { Message } from "../index"
import "./Messages.scss"

const Messages = ({ blockRef, isLoading, items, user, onRemoveMessage }) => {
  return (
    <div
      ref={blockRef}
      className={classNames("messages", { "messages--loading": isLoading })}
    >
      {isLoading ? (
        <Spin size="large" tip="Messages are loading" />
      ) : items && !isLoading ? (
        items.length > 0 ? (
          items.map((item) => (
            <Message
              key={item._id}
              {...item}
              isMe={user._id === item.user._id}
              onRemoveMessage={onRemoveMessage.bind(this, item._id)}
            />
          ))
        ) : (
          <Empty description="Dialog is empty" />
        )
      ) : (
        <Empty description="Open dialog" />
      )}
    </div>
  )
}

Messages.propTypes = {
  items: PropTypes.array,
}

export default Messages
