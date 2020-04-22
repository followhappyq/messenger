import React, { useState } from "react"
import PropTypes from "prop-types"
import { SmileOutlined, CameraOutlined, SendOutlined } from "@ant-design/icons"
import { Input } from "antd"
import { UploadField } from "@navjobs/upload"
import { Picker } from "emoji-mart"

import "./ChatInput.scss"

const ChatInput = (props) => {
  const [emojiPickerVisible, setShowEmojiPicker] = useState("")

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible)
  }

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        {emojiPickerVisible && (
          <div className="chat-input__emoji-picker">
            <Picker set="apple" />
          </div>
        )}
        <SmileOutlined onClick={toggleEmojiPicker} />
      </div>

      <Input size="large" placeholder="Write a message..." />
      <div className="chat-input__actions">
        <UploadField
          onFiles={(files) => console.log(files)}
          containerProps={{
            className: "chat-input__actions-upload-btn",
          }}
          uploadProps={{
            accept: ".jpg,.png,.jpeg,.gif,.bmp",
            multiple: "multiple",
          }}
        >
          <CameraOutlined />
        </UploadField>

        <SendOutlined />
      </div>
    </div>
  )
}

ChatInput.propTypes = {
  className: PropTypes.string,
}

export default ChatInput
