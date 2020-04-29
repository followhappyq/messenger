import React from "react"
import { ChatInput as ChatInputBase } from "../components"
import { connect } from "react-redux"
import { messagesActions } from "../redux/actions"

const ChatInput = ({ fetchSandMessages, currentDialogId }) => {
  return (
    <ChatInputBase
      onSendMessage={fetchSandMessages}
      currentDialogId={currentDialogId}
    />
  )
}

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput)
