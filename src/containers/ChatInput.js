import React from "react"
import { connect } from "react-redux"

import { messagesActions } from "../redux/actions"
import { ChatInput as ChatInputBase } from "../components"

const ChatInput = ({ fetchSendMessages, currentDialogId }) => {
  return (
    <ChatInputBase
      onSendMessage={fetchSendMessages}
      currentDialogId={currentDialogId}
    />
  )
}

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput)
