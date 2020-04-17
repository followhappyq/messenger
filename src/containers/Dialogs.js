import React, { useState } from "react"

import { Dialogs as BaseDialogs } from "../components"

const Dialogs = ({ items, userId }) => {
  const [inputValue, setValue] = useState("")
  let filtred = Array.from(items)

  const onChangeInput = (value) => {
    filtred = filtred.filter((dialog) => dialog.user.login.indexOf(value >= 0))
    setValue(value)
  }

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  )
}

export default Dialogs
