import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"

import { messagesActions } from "../redux/actions"
import { Messages as BaseMessages } from "../components"

const Dialogs = ({ currentDialogId, fetchMessages, items, isLoading }) => {
  const messagesRef = useRef(null)

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId)
    }
    // eslint-disable-next-line
  }, [currentDialogId])

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)
    }
  })

  return (
    <BaseMessages items={items} isLoading={isLoading} blockRef={messagesRef} />
  )
}

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
  }),
  messagesActions
)(Dialogs)
