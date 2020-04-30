import React, { useState } from "react"
import { connect } from "react-redux"

import { messagesActions } from "../redux/actions"
import { ChatInput as ChatInputBase } from "../components"
import { filesApi } from "../utils/api"

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
  const [value, setValue] = useState("")
  const [attachments, setAttachments] = useState([])
  const [emojiPickerVisible, setShowEmojiPicker] = useState("")

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible)
  }

  const addEmoji = ({ colons }) => {
    setValue((value + " " + colons).trim())
  }

  const sendMessage = () => {
    fetchSendMessage(
      value,
      currentDialogId,
      attachments.map((file) => file.uid)
    )
    setAttachments([])
    setValue("")
  }

  const handleSendMessage = (e) => {
    if (e.keyCode === 13 && value.trim()) {
      sendMessage()
    }
  }

  const onSelectFiles = async (files) => {
    let uploaded = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const uid = Math.round(Math.random() * 1000)
      uploaded = [
        ...uploaded,
        {
          uid,
          name: file.name,
          status: "uploading",
        },
      ]
      setAttachments(uploaded)
      // eslint-disable-next-line no-loop-func
      await filesApi.upload(file).then(({ data }) => {
        uploaded = uploaded.map((item) => {
          if (item.uid === uid) {
            return {
              status: "done",
              uid: data.file._id,
              name: data.file.filename,
              url: data.file.url,
            }
          }
          return item
        })
      })
    }
    setAttachments(uploaded)
  }

  if (!currentDialogId) {
    return null
  }

  return (
    <ChatInputBase
      value={value}
      setValue={setValue}
      emojiPickerVisible={emojiPickerVisible}
      toggleEmojiPicker={toggleEmojiPicker}
      handleSendMessage={handleSendMessage}
      addEmoji={addEmoji}
      sendMessage={sendMessage}
      attachments={attachments}
      onSelectFiles={onSelectFiles}
    />
  )
}

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput)
