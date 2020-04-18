import React, { useState, useEffect } from "react"

import { Dialogs as BaseDialogs } from "../components"

const Dialogs = ({ items, userId, inputValue }) => {
  const [filtred, setFiltredItems] = useState(Array.from(items))

  const onChangeInput = () => {
    setFiltredItems(
      items.filter((dialog) => dialog.user.login.indexOf(inputValue) >= 0)
    )
  }

  useEffect(() => {
    items.length && onChangeInput()
    // eslint-disable-next-line
  }, [items])

  return <BaseDialogs userId={userId} items={filtred} />
}

export default Dialogs
