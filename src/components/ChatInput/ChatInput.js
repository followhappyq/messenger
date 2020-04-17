import React from "react"
import PropTypes from "prop-types"
import { SmileOutlined, CameraOutlined, SendOutlined } from "@ant-design/icons"
import { Input } from "antd"

import "./ChatInput.scss"

const ChatInput = (props) => (
  <div className="chat-input">
    <div className="chat-input__smile-btn">
      <SmileOutlined />
    </div>
    <Input size="large" placeholder="Write a message..." />
    <div className="chat-input__actions">
      <CameraOutlined />
      <SendOutlined />
    </div>
  </div>
)

ChatInput.propTypes = {
  className: PropTypes.string,
}

export default ChatInput
