import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import socket from "../core/socket"
import { dialogsActions } from "../redux/actions"
import { Dialogs as BaseDialogs } from "../components"

const Dialogs = ({ fetchDialogs, currentDialogId, items, userId }) => {
  const [inputValue, setValue] = useState("")
  const [filtred, setFiltredItems] = useState(Array.from(items))
  const onChangeInput = (value = "") => {
    setFiltredItems(
      items.filter(
        (dialog) =>
          dialog.author.login.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
          dialog.partner.login.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    )
    setValue(value)
  }

  useEffect(() => {
    if (items.length) {
      onChangeInput()
    }
    // eslint-disable-next-line
  }, [items])

  useEffect(() => {
    fetchDialogs()

    socket.on("SERVER:DIALOG_CREATED", fetchDialogs)
    socket.on("SERVER:NEW_MESSAGE", fetchDialogs)

    return () => {
      socket.removeListener("SERVER:DIALOG_CREATED", fetchDialogs)
      socket.removeListener("SERVER:NEW_MESSAGE", fetchDialogs)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      currentDialogId={currentDialogId}
    />
  )
}

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs)
