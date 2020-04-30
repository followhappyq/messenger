import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { SmileOutlined, CameraOutlined, SendOutlined } from "@ant-design/icons"
import { Input } from "antd"
import { UploadField } from "@navjobs/upload"
import { Picker } from "emoji-mart"

import { UploadFiles } from "../"
import "./ChatInput.scss"

const ChatInput = (props) => {
  const {
    emojiPickerVisible,
    value,
    setValue,
    addEmoji,
    handleSendMessage,
    toggleEmojiPicker,
    sendMessage,
    attachments,
    onSelectFiles,
  } = props

  return (
    <Fragment>
      <div className="chat-input">
        <div className="chat-input__smile-btn">
          {emojiPickerVisible && (
            <div className="chat-input__emoji-picker">
              <Picker
                set="apple"
                onSelect={(emojiTag) => {
                  addEmoji(emojiTag)
                }}
              />
            </div>
          )}
          <SmileOutlined onClick={toggleEmojiPicker} />
        </div>

        <Input
          size="large"
          placeholder="Write a message..."
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={handleSendMessage}
          value={value}
        />
        <div className="chat-input__actions">
          <UploadField
            onFiles={onSelectFiles}
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

          <SendOutlined onClick={sendMessage} />
        </div>
      </div>
      <UploadFiles attachments={attachments} />
    </Fragment>
  )
}

ChatInput.propTypes = {
  className: PropTypes.string,
}

export default ChatInput
