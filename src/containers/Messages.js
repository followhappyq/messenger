import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"
import { Empty } from "antd"

import socket from "../core/socket"
import { messagesActions } from "../redux/actions"
import { Messages as BaseMessages } from "../components"

const Dialogs = ({
  currentDialogId,
  fetchMessages,
  addMessage,
  items,
  user,
  isLoading,
  removeMessageById,
}) => {
  const messagesRef = useRef(null)

  const onNewMessage = (data) => {
    addMessage(data)
  }

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId)
    }

    socket.on("SERVER:NEW_MESSAGE", onNewMessage)

    return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage)
    // eslint-disable-next-line
  }, [currentDialogId])

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)
    }
  }, [items])

  return currentDialogId ? (
    <BaseMessages
      user={user}
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading && !user}
      onRemoveMessage={removeMessageById}
    />
  ) : (
    <Empty description="Open dialog" />
  )
}

export default connect(
  ({ dialogs, messages, user }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    user: user.data,
  }),
  messagesActions
)(Dialogs)
